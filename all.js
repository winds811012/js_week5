import zh from "./zh_TW.js";
// Class 設定檔案
VeeValidate.configure({
  classes: {
    valid: "is-valid",
    invalid: "is-invalid",
  },
});

// 載入自訂規則包
VeeValidate.localize("tw", zh);
Vue.component("ValidationProvider", VeeValidate.ValidationProvider);

// 將 VeeValidate 完整表單 驗證工具載入 作為全域註冊
Vue.component("ValidationObserver", VeeValidate.ValidationObserver);
// 掛載 Vue-Loading 套件
Vue.use(VueLoading);
// 全域註冊 VueLoading 並標籤設定為 loading
Vue.component("loading", VueLoading);

var app = new Vue({
  el: "#app",
  data: {
    user: {
      token: "",
      uuid: "9b70b4ea-a223-42d1-99e3-ba225ff8bc2d",
    },
    productList: [],
    payTypeList: ["WebATM", "ATM", "Credit", "ApplePay", "GooglePay"],
    receivement: {
      name: "",
      phone: "",
      mail: "",
      address: "",
      payType: "",
      content: "",
    },
    isLoading: false,
  },

  created() {
    this.getProducts();
  },
  methods: {
    //取得資料
    getProducts(page = 1) {
      this.isLoading = true;
      let api = `https://course-ec-api.hexschool.io/api/${this.user.uuid}/ec/products?page=${page}`;
      //   axios.defaults.headers.common.Authorization = `Bearer ${this.user.token}`;
      axios.get(api).then((res) => {
        this.productList = res.data.data;
        this.isLoading = false;
        // this.pagination = res.data.meta.pagination;
      });
    },
    createOrder() {
      console.log("送出表單!!");
      //   this.isLoading = true;
      //   const api = `https://course-ec-api.hexschool.io/api/${this.uuid}/ec/orders`;
      //   axios
      //     .post(api, this.form)
      //     .then((response) => {
      //       if (response.data.data.id) {
      //         this.isLoading = false;
      //         // 跳出提示訊息
      //         $("#orderModal").modal("show");

      //         // 重新渲染購物車
      //         this.getCart();
      //       }
      //     })
      //     .catch((error) => {
      //       this.isLoading = false;
      //       console.log(error.response.data.errors);
      //     });
    },
  },
});
