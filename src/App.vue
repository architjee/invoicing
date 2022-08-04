<script>

let TAXATION_VALUE = 0.03;
export default {
  data() {

    let emptyBillArray = []
    for (let i = 0; i < 8; i++) {
      emptyBillArray.push({ "wght": 0, "rate": 0 })
    }


    let remarksAmountObject = { "remarks": "", "amount": 0 };
    return {
      invoiceObject: {
        "bill": emptyBillArray, "goldSilverReturn": structuredClone(remarksAmountObject), "makingCharges": structuredClone(remarksAmountObject), "discount": structuredClone(remarksAmountObject),
        "smallTotal": 0,
        "isTaxable": false, "sgstTax": 0, "cgstTax": 0,
        "bigTotal": 0,
        "inWords": "",
        "cashPaid": structuredClone(remarksAmountObject),
        "chequeAmount": structuredClone(remarksAmountObject),
        "onlineTransaction": structuredClone(remarksAmountObject),
        "otherPaymentsObject": structuredClone(remarksAmountObject),
        "totalPaid": 0,
        "amountDue": 0

      }

    }
  },
  computed: {
    smallTotalProp() {
      let sTotal = 0;
      this.invoiceObject.bill.forEach(billement => {
        billement.total = billement.wght * billement.rate;
        sTotal += billement.total;
      });
      sTotal = Number(sTotal.toFixed(2))
      sTotal = sTotal - this.invoiceObject.goldSilverReturn.amount + this.invoiceObject.makingCharges.amount + this.invoiceObject.discount.amount
      this.invoiceObject.smallTotal = sTotal;
      return this.invoiceObject.smallTotal;
    },
    sgstTaxCalculation() {
      if (this.invoiceObject.isTaxable) {
        this.invoiceObject.sgstTax = this.invoiceObject.smallTotal * (TAXATION_VALUE);
      } else {
        this.invoiceObject.sgstTax = 0
      }
      this.invoiceObject.sgstTax = Number(this.invoiceObject.sgstTax.toFixed(2));
      return this.invoiceObject.sgstTax;
    },
    cgstTaxCalculation() {
      if (this.invoiceObject.isTaxable) {
        this.invoiceObject.cgstTax = this.invoiceObject.smallTotal * (TAXATION_VALUE);

      } else {
        this.invoiceObject.cgstTax = 0
      }
      this.invoiceObject.cgstTax = Number(this.invoiceObject.cgstTax.toFixed(2));
      return this.invoiceObject.cgstTax;
    },
    bigTotalCalculation() {
      let tempBigTotal = 0
      if (this.invoiceObject.isTaxable) {
        tempBigTotal = this.invoiceObject.smallTotal + this.invoiceObject.cgstTax + this.invoiceObject.sgstTax;
      } else {
        tempBigTotal = this.invoiceObject.smallTotal;
      }
      this.invoiceObject.bigTotal = Number(tempBigTotal.toFixed(0));
      this.invoiceObject.inWords = this.num2Text(this.invoiceObject.bigTotal);
      return this.invoiceObject.bigTotal;
    },
    dueAmountCalculation(){
      let dueAmount = 0;
      dueAmount = this.invoiceObject.bigTotal - this.invoiceObject.cashPaid.amount - this.invoiceObject.chequeAmount.amount - this.invoiceObject.onlineTransaction.amount - this.invoiceObject.otherPaymentsObject.amount
      this.invoiceObject.dueAmount = dueAmount;
      return this.invoiceObject.dueAmount;
    }



  },
  methods: {
    num2Text(num) {

      let a = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
      let b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
      if ((num = num.toString()).length > 9) return 'overflow';
      let n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
      if (!n) return;
      var str = '';
      str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
      str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
      str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
      str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
      str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'only ' : '';
      return str;
    }


  }
}
</script>

<template>
  
    
    <div class="column pink is-10 has-text-centered mainForm">

      <div class="columns">
        <div class="column is-1"></div>
        <div class="column">
          <div class="field">
            <label class="label">Client Name</label>
            <div class="control">
              <input class="input" type="text" placeholder="Client Name" v-model="invoiceObject.cName">
            </div>
          </div>




          <div class="field">
            <label class="label">Invoice No.</label>
            <div class="control">
              <input class="input" type="text" placeholder="Invoice No." v-model="invoiceObject.invoiceNo">
            </div>
          </div>

          <div class="field">
            <label class="label">Mobile No.</label>
            <div class="control">
              <input class="input" type="text" placeholder="Mobile No." v-model="invoiceObject.mobileNo">
            </div>
          </div>

          <!-- <div class="field">
            <label class="label">Username</label>
            <div class="control has-icons-left has-icons-right">
              <input class="input is-success" type="text" placeholder="Text input" value="bulma">
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
              </span>
            </div>
            <p class="help is-success">This username is available</p>
          </div>

          <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left has-icons-right">
              <input class="input is-danger" type="email" placeholder="Email input" value="hello@">
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-exclamation-triangle"></i>
              </span>
            </div>
            <p class="help is-danger">This email is invalid</p>
          </div>

          <div class="field">
            <label class="label">Subject</label>
            <div class="control">
              <div class="select">
                <select>
                  <option>Select dropdown</option>
                  <option>With options</option>
                </select>
              </div>
            </div>
          </div>
 -->


          <!-- <div class="field">
            <div class="control">
              <label class="checkbox">
                <input type="checkbox">
                I agree to the <a href="#">terms and conditions</a>
              </label>
            </div>
          </div>

          <div class="field">
            <div class="control">
              <label class="radio">
                <input type="radio" name="question">
                Yes
              </label>
              <label class="radio">
                <input type="radio" name="question">
                No
              </label>
            </div>
          </div> -->


        </div>
        <div class="column">
          <div class="field">
            <label class="label">Place of supply</label>
            <div class="control">
              <input class="input" type="text" placeholder="Place of supply" v-model="invoiceObject.place">
            </div>
          </div>

          <div class="field">
            <label class="label">Date</label>
            <div class="control">
              <input class="input" type="date" placeholder="Date" v-model="invoiceObject.dateOfInvoice">
            </div>
          </div>

          <div class="field">
            <label class="label">Comments/Message</label>
            <div class="control">
              <input class="input" type="text" placeholder="Comments/Message" v-model="invoiceObject.mobileNo">
            </div>
          </div>


        </div>

      </div>
      <table class="table is-fullwidth is-striped is-bordered is-hoverable is-narrow">
        <tr>
          <th>
            Description of Goods
          </th>
          <th>
            HSN Code
          </th>
          <th>
            Weight(In gms.)
          </th>
          <th>
            Rate
          </th>
          <th>
            Amount
          </th>
        </tr>

        <tr v-for="i in invoiceObject.bill">
          <td>
            <input class="input is-small" type="text" placeholder="Description of Goods" v-model="i.desc">
          </td>
          <td>
            <input class="input is-small" type="text" placeholder="HSN Code" v-model="i.code">
          </td>
          <td>
            <input class="input is-small" type="number" placeholder="Weight" v-model.number="i.wght">
          </td>
          <td>
            <input class="input is-small" type="number" placeholder="Rate" v-model.number="i.rate">
          </td>
          <td>
            {{ i.wght * i.rate }}
          </td>
        </tr>

      </table>



      <table class="table is-fullwidth is-striped is-bordered is-hoverable is-narrow">
        <tr>
          <th>
            Particulars
          </th>
          <th colspan="3">
            Remarks
          </th>
          <th>
            Amount
          </th>
        </tr>
        <tr>
          <td>
            Gold/Silver Return
          </td>
          <td colspan="3">
            <input class="input is-small" type="text" placeholder="Gold/Silver Return Description"
              v-model="invoiceObject.goldSilverReturn.remarks">
          </td>
          <td>
            <input class="input is-small" type="number" placeholder="Gold/Silver Return Amount"
              v-model.number="invoiceObject.goldSilverReturn.amount">
          </td>
        </tr>
        <tr>
          <td>
            Making Charges
          </td>
          <td colspan="3">
            <input class="input is-small" type="text" placeholder="Making Charges Description"
              v-model="invoiceObject.makingCharges.remarks">
          </td>
          <td>
            <input class="input is-small" type="number" placeholder="Making Charges Amount"
              v-model.number="invoiceObject.makingCharges.amount">
          </td>
        </tr>
        <tr>
          <td>
            Discount
          </td>
          <td colspan="3">
            <input class="input is-small" type="text" placeholder="Discount Description"
              v-model="invoiceObject.discount.remarks">
          </td>
          <td>
            <input class="input is-small" type="number" placeholder="Discount Amount"
              v-model.number="invoiceObject.discount.amount">
          </td>
        </tr>
        <tr>
          <td>
            Total
          </td>
          <td colspan="3">
          </td>
          <td>
            {{ smallTotalProp }}
          </td>
        </tr>
      </table>

      <div class="control">
        <label class="radio">
          <input type="radio" name="answer" :value="true" v-model="invoiceObject.isTaxable">
          Yes
        </label>
        <label class="radio">
          <input type="radio" name="answer" :value="false" v-model="invoiceObject.isTaxable">
          No
        </label>
      </div>

      <table class="table is-fullwidth is-striped is-bordered is-hoverable is-narrow">

        <tr v-if="invoiceObject.isTaxable">
          <td>
            SGST Tax
          </td>
          <td colspan="3">
          </td>
          <td>
            {{ sgstTaxCalculation }}
          </td>
        </tr>
        <tr v-if="invoiceObject.isTaxable">
          <td>
            CGST Tax
          </td>
          <td colspan="3">

          </td>
          <td>
            {{ cgstTaxCalculation }}
          </td>
        </tr>

        <tr>
          <td>
            Grand Total
          </td>
          <td colspan="3">
          </td>
          <td>
            {{ bigTotalCalculation }}
          </td>
        </tr>
      </table>

<div>
        Total(in words) : {{ this.invoiceObject.inWords }}
      </div>

  <table class="table is-fullwidth is-striped is-bordered is-hoverable is-narrow">
        <tr>
          <th>
            Mode of Transaction
          </th>
          <th colspan="3">
            Remarks
          </th>
          <th>
            Amount
          </th>
        </tr>
        <tr>
          <td>
            Cash Paid
          </td>
          <td colspan="3">
            <input class="input is-small" type="text" placeholder="Cash Paid Remarks"
              v-model="invoiceObject.cashPaid.remarks">
          </td>
          <td>
            <input class="input is-small" type="number" placeholder="Amount Paid via Cash"
              v-model.number="invoiceObject.cashPaid.amount">
          </td>
        </tr>
        <tr>
          <td>
            Cheque Paid
          </td>
          <td colspan="3">
            <input class="input is-small" type="text" placeholder="Cheque Paid Remarks"
              v-model="invoiceObject.chequeAmount.remarks">
          </td>
          <td>
            <input class="input is-small" type="number" placeholder="Making Charges Amount"
              v-model.number="invoiceObject.chequeAmount.amount">
          </td>
        </tr>
        <tr>
          <td>
            Online Transaction
          </td>
          <td colspan="3">
            <input class="input is-small" type="text" placeholder="Online Transaction Remarks"
              v-model="invoiceObject.onlineTransaction.remarks">
          </td>
          <td>
            <input class="input is-small" type="number" placeholder="Online Amount"
              v-model.number="invoiceObject.onlineTransaction.amount">
          </td>
        </tr>
        <tr>
          <td>
            Others
          </td>
          <td colspan="3">
            <input class="input is-small" type="text" placeholder="Other Transaction Remarks"
              v-model="invoiceObject.otherPaymentsObject.remarks">
          </td>
          <td>
            <input class="input is-small" type="number" placeholder="Other Transaction Amount"
              v-model.number="invoiceObject.otherPaymentsObject.amount">
          </td>
        </tr>
        <tr>
          <td>
            Total
          </td>
          <td colspan="3">
          </td>
          <td>
            {{ dueAmountCalculation }}
          </td>
        </tr>
      </table>

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link">Submit</button>
        </div>
        <div class="control" @click="complexComputation">
          <button class="button is-link is-light">Cancel</button>
        </div>
      </div>

    </div>
 
</template>

<style scoped>

.banner {
  height: 100vh;
}
</style>
