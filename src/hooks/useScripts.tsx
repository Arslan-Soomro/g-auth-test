import { useEffect } from "react";

function createAndAppendScript(src: string) {
  const script = document.createElement("script");
  script.src = src;
  script.async = true;
  document.body.appendChild(script);
  return script;
}

interface Props {
  srcs: string[];
}

function useScripts({ srcs }: Props) {
  // Since the scripts are to be added in index.html, we need to add the path prefix
  const pathPrefix = "./src/";

  useEffect(() => {
    // Add all scripts to the DOM
    const scripts = srcs.map((src) => createAndAppendScript(pathPrefix + src));
    // Remove all scripts from the DOM
    return () => {
      scripts.forEach((script) => {
        document.body.removeChild(script);
      });
    };
  }, []);
}

export default useScripts;
