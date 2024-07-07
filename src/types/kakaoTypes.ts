export type KakaoRequestType = {
  cid: string;
    partner_order_id: string;
    partner_user_id: string;
    item_name: string;
    quantity: number;
    total_amount:  number;
    tax_free_amount:  number;
    approval_url: string;
    fail_url: string;
    cancel_url: string;
}

export type KakaoReadyResponseType = {
  data : {tid: string;
  tms_result: boolean,
  created_at: string;
  next_redirect_pc_url: string;
  next_redirect_mobile_url: string;
  next_redirect_app_url: string;
  android_app_scheme: string;
  ios_app_scheme: string;}
}

