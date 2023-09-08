export default interface NapiCommon {
  userInfo: {
    cuid: string;
    pfid: string;
    userToken: string;
    userTokenExpire: number;
    memberFlg: string;
    contractStatusCode: string;
    canSubscribe: boolean;
    multipleChargePreventionFlg: boolean;
    securityToken: string;
    enableUpsellBlockUnextPayment: boolean;
    enableUpsellBlockOtherPayment: boolean;
    phoneNumberConfirmationLevel: string;
  };
  userEnv: {
    siteCode: string;
  };
  systemInfo: {
    systemDate: string;
    infoVersion: string;
    appVersion: string;
  };
  result: {
    errorCode: string;
    errorMessage: string;
  };
}
