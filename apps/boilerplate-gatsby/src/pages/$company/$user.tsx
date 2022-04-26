import { useEffect, useState } from 'react';

async function fakeAPICall<T>(params: T): Promise<{ data: T }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: params });
    }, 3000);
  });
}

function Spa({ params }: any) {
  const [data, setData] = useState({});

  async function getInfo() {
    const { data } = await fakeAPICall(params);
    setData(data);
  }

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <pre
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ params, data }, undefined, 2),
      }}
    />
  );
}

export default Spa;
