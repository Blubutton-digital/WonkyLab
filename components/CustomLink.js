// components/CustomLink.js
import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect } from "react";

const CustomLink = ({ href, children, ...props }) => {
  const router = useRouter();

  const handleClick = (e) => {
    // Prevent the default link behavior
    e.preventDefault();
    // Navigate to the href
    router.push(href);
  };

  useEffect(() => {
    // If there's a hash in the URL, scroll to it after the navigation
    if (router.asPath.includes("#")) {
      const id = router.asPath.split("#")[1];
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView();
      }
    }
  }, [router.asPath]);

  return (
    <Link href={href} {...props} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default CustomLink;
