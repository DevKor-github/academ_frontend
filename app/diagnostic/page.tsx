'use client';

import { apiCheckOnline } from '@/lib/api/admin';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Page() {
  const [str, setStr] = useState('연결 시도 중..');

  useEffect(() => {
    apiCheckOnline({})
      .then((a) => {
        setStr(a.version);
      })
      .catch(() => setStr('실패'));
  }, []);

  return (
    <div className="p-10 text-xl">
      Academ Backend와의 연결 상태는 다음과 같습니다:
      <br />
      {str}
    </div>
  );
}
