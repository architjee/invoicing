<script>
export default {
  data() {
    return {
      invoiceObject: { "bill": [{ "wght": 0, "rate": 0 }, { "wght": 0, "rate": 0 }, { "wght": 0, "rate": 0 }, { "wght": 0, "rate": 0 }, { "wght": 0, "rate": 0 }, { "wght": 0, "rate": 0 }, { "wght": 0, "rate": 0 }, { "wght": 0, "rate": 0 }], isTaxable: false, smallTotal:0 }

    }
  },
  computed: {
    smallTotalProp() {
      let sTotal = 0;
      this.invoiceObject.bill.forEach(billement => {
        billement.total = billement.wght * billement.rate
        sTotal += billement.total;
      });
      this.invoiceObject.smallTotal = sTotal;
      return this.invoiceObject.smallTotal;
    }

  },
  methods:{
    complexComputation(){
      console.log(this.invoiceObject);
    }
  }
}
</script>

<template>
  <div class="columns is-vcentered">
    <div class="column is-2 banner has-background-danger has-text-right">
      <div class="content has-text-white mt-6 px-3 title is-1">
        i-Manas
      </div>
      <div class="subtitle is-3 has-text-white">
        Made with ♥ by AJ {{ smallTotalProp }}
      </div>
    </div>
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
            <label class="label">Message</label>
            <div class="control">
              <textarea class="textarea" placeholder="Textarea"></textarea>
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
          <th>
            <input class="input is-small" type="text" placeholder="Description of Goods" v-model="i.desc">
          </th>
          <th>
            <input class="input is-small" type="text" placeholder="HSN Code" v-model="i.code">
          </th>
          <th>
            <input class="input is-small" type="text" placeholder="Weight" v-model.number="i.wght">
          </th>
          <th>
            <input class="input is-small" type="text" placeholder="Rate" v-model.number="i.rate">
          </th>
          <th>
            {{ i.wght * i.rate }}
          </th>
        </tr>

      </table>
      <div class="control">
        <label class="radio">
          <input type="radio" name="answer" :value="true" v-model="invoiceObject.isTaxable" >
          Yes
        </label>
        <label class="radio">
          <input type="radio" name="answer" :value="false" v-model="invoiceObject.isTaxable">
          No
        </label>
      </div>
      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link">Submit</button>
        </div>
        <div class="control" @click="complexComputation">
          <button class="button is-link is-light">Cancel</button>
        </div>
      </div>

    </div>
  </div>
</template>

<style>
/* div{
  border: 1px solid black;
} */
.banner {
  height: 100vh;
}

/* .pink {
   border: 1px solid red; 
} */
</style>
