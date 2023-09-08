const napiGetRequester = async <T>({
  path,
  params,
}: {
  path: string;
  params: Record<string, unknown>;
}): Promise<T> => {
  const host = 'https://d4bauql40l0w2.cloudfront.net/prod/prod';
  const reqBody = {
    common: {
      userInfo: {
        userToken: '',
        pfid: '',
        securityToken: '',
      },
      deviceInfo: {
        deviceType: '700',
        appVersion: '1',
      },
    },
    data: params,
  };
  const buffer = Buffer.from(JSON.stringify(reqBody));
  const b64json = encodeURIComponent(buffer.toString('base64'));
  const cacheBuster = Math.round(new Date().getTime() / 1000 / 60);
  const apiEndPoint = `${host}${path}?b=${b64json}&cache=${cacheBuster}`;
  const res = await fetch(apiEndPoint, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': 'unext-next-lp-fetch',
      'X-Forwarded-For': '',
    },
  });

  if (res.status !== 200) {
    throw new Error(`napi-getがエラーを返却 ${res.status} ${path}`);
  }
  const result = (await res.json()) as T;
  return result;
};

export default napiGetRequester;
