import React from 'react';

export default function Test() {
  const htmlText = '<h1>hello</h1>';
  const markup = { __html: htmlText };
  //   XSS漏洞
  return (
    <>
      <div dangerouslySetInnerHTML={markup}></div>
    </>
  );
}
