import { useEffect, useRef } from "react";

function DocViewer() {
  const viewerRef = useRef(null);

  useEffect(() => {
    const viewerElement = viewerRef.current;
    console.log("Element: ", viewerElement);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    // $(viewerElement).css("color", "red");
    /*
    .officeToHtml({
        url: "https://www.africau.edu/images/default/sample.pdf",
      });
    */
  }, []);

  return <div ref={viewerRef}>hello world</div>;
}

export default DocViewer;
