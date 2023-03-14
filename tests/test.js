const json = {
  getCustomerInfo: {
    url: '/sh/order/v/getCustomerInfo.json',
    method: 'POST',
  }, // 获取客户信息
  insertCustomerAddress: {
    url: '/v3/h5/order/insertCustomerAddress.json',
    method: 'POST'
  },
  test: {
    url: '/sh/order/v/getCustomerInfo.json',
    method: 'post',
    header: {
      name: 'a'
    }
  }
}

export default json