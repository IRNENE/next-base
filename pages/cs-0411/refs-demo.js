import React from 'react';
import InputId from '@/components/refs-demo/input-id';
import InputRefs from '@/components/refs-demo/input-refs';
export default function RefsDemo() {
  return (
    <>
      <h1>Refs範例</h1>
      <InputId />
      {/* 會出現重複id的錯誤 */}
      <InputRefs />
      <InputRefs />
      <InputRefs />
    </>
  );
}
