<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
    <nb-header>
      <nb-left>
        <nb-button
          transparent
          :onPress="() => this.props.navigation.openDrawer()"
        >
          <nb-icon name="menu" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>Login</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>
    <nb-content padder>
      <image
        :source="clumsyBird"
        class="clumsyBird"
      />
      <text class="login-intro">PlayPoint - Unlimited access to mobile games.</text>
      <text class="login-header">ENTER YOUR MOBILE NUMBER TO ACCESS THIS SERVICE:</text>
      <nb-item>
        <nb-icon name="md-phone-portrait" />
        <nb-input v-model="mobileNumber" placeholder="Your number" secure-text-entry :on-blur="() => $v.mobileNumber.$touch()"/>
      </nb-item>
      <nb-button block block :on-press="login" class="login-btn">
        <nb-spinner v-if="loggingIn" size="small" color="white" />
        <nb-text>Login</nb-text>
      </nb-button>
    </nb-content>
  </nb-container>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import { Toast } from "native-base";
import clumsyBird from "../../../../assets/mobi/clumsy-bird-thumbnail.png";
import store from "../../../store";

export default {
  props: {
    navigation: {
      type: Object
    }
  },
  computed: {
    loggingIn () {
      return store.state.isLoading;
    },
    isLogged () {
      return store.state.isLogged;
    }
  },
  validations: {
    mobileNumber: {
      required
    }
  },
  data() {
    return {
      clumsyBird,
      mobileNumber: ''
    };
  },
  methods: {
    login() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        Toast.show({
          text: 'Mobile number is required.',
          type: "danger"
        })
      } else {
        store.dispatch(
          'LOG_USER',
          {
            "phone": this.mobileNumber
          }
        ).then(response => {
          if (response.state == 200) {
            Toast.show({
              text: 'Logged in successful.',
              type: "success"
            });
            setTimeout(() => {
              this.navigation.navigate("Games");
            }, 1500)
          } else {
            Toast.show({
              text: 'Invalid phone number.',
              type: "danger"
            });
          }
        }, error => {
            Toast.show({
              text: 'Network error. Check internet connection and try again.',
              type: "danger"
            });
        });
      }
    }
  }
};
</script>

<style scoped>
.login-header {
  text-align: center;
}
.login-intro {
  text-align: center;
  font-size: 12px;
  margin-bottom: 10px;
}
.clumsyBird {
  width: 100%;
  height: 200px;
}
.login-btn {
  margin-top: 10px;
  background-color: #f68b33;
}
</style>
