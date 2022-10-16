import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  /*   bannerConfig: AdMobFreeBannerConfig = {
      // add your config here
      // for the sake of this example we will just use the test config
      id: "ca-app-pub-7382155382696019~9262711221",
      isTesting: true,
      autoShow: true
    }; */

  constructor(@Inject(DOCUMENT) document: Document/*  private admobFree:AdMobFreeBanner */) {

 /*    this.admobFree.config(this.bannerConfig);

    this.showBanner() */ }


  firstnumber: any;
  secondnumber: any;
  result: any;
  operation: any;
  divDigit: any;
  coma: any;
  list: any;
  /** buttons **/
  /* 
  
    showBanner() {
  
      this.admobFree.prepare()
        .then(() => {
          console.log("banner impreso");
          // banner Ad is ready
          // if we set autoShow to false, then we will need to call the show method here
        })
        .catch(e => console.log(e));
    }
   */
  button1() {

    this.divDigit = document.getElementById("Digit");
    this.divDigit.innerHTML += 1;



  }

  button2() {


    this.divDigit = document.getElementById("Digit");
    this.divDigit.innerHTML += 2;


  }

  button3() {


    this.divDigit = document.getElementById("Digit");
    this.divDigit.innerHTML += 3;


  }

  button4() {


    this.divDigit = document.getElementById("Digit");
    this.divDigit.innerHTML += 4;


  }

  button5() {


    this.divDigit = document.getElementById("Digit");
    this.divDigit.innerHTML += 5;


  }

  button6() {


    this.divDigit = document.getElementById("Digit");
    this.divDigit.innerHTML += 6;


  }
  button7() {


    this.divDigit = document.getElementById("Digit");
    this.divDigit.innerHTML += 7;


  }

  button8() {


    this.divDigit = document.getElementById("Digit");
    this.divDigit.innerHTML += 8;


  }

  button9() {


    this.divDigit = document.getElementById("Digit");
    this.divDigit.innerHTML += 9;


  }

  button0() {


    this.divDigit = document.getElementById("Digit");
    this.divDigit.innerHTML += 0;



  }

  //operacions


  buttonclean() {


    document.getElementById("Digit").innerHTML = "";
    document.getElementById("Operacio").innerHTML = "";
    document.getElementById("Resultat").innerHTML = "";
    this.result = NaN;
    this.firstnumber = NaN;
    this.secondnumber = NaN;
    this.list = 0;
    this.coma = 0;
    this.operation = NaN;
  }



  dot() {

    if (this.coma == 0) {

      this.divDigit = document.getElementById("Digit");
      this.divDigit.innerHTML += ".";
      this.coma += 1;
    }
  }
  buttonsuma() {

    this.coma = 0;
    this.divDigit = document.getElementById("Operacio");
    this.divDigit.innerHTML = "+";
    this.operation = "+";

    this.firstnumber = parseFloat(document.getElementById("Digit").innerHTML);
    document.getElementById("Digit").innerHTML = "";

  }
  buttonmulti() {
    this.coma = 0;
    this.divDigit = document.getElementById("Operacio");
    this.divDigit.innerHTML = "*";

    this.firstnumber = parseFloat(document.getElementById("Digit").innerHTML);
    document.getElementById("Digit").innerHTML = "";
    this.operation = "*";






  }
  buttonresta() {
    this.coma = 0;
    this.divDigit = document.getElementById("Operacio");
    this.divDigit.innerHTML = "-";

    this.firstnumber = parseFloat(document.getElementById("Digit").innerHTML);
    document.getElementById("Digit").innerHTML = "";
    this.operation = "-";






  }
  buttondivi() {
    this.coma = 0;
    this.divDigit = document.getElementById("Operacio");
    this.divDigit.innerHTML = "/";

    this.firstnumber = parseFloat(document.getElementById("Digit").innerHTML);
    document.getElementById("Digit").innerHTML = "";
    this.operation = "/";






  }
  buttonigual() {

    this.secondnumber = parseFloat(document.getElementById("Digit").innerHTML);

    if (isNaN(this.secondnumber)) {
      this.secondnumber=this.result;
    }

    if (this.operation == "+") {


      if (isNaN(this.result)) {

        this.result = this.firstnumber + this.secondnumber;

      }
      else {
        this.result = this.result + this.secondnumber;
      }
    } else if (this.operation == "*") {

      if (isNaN(this.result)) {

        this.result = this.firstnumber * this.secondnumber;

      }
      else {
        this.result = this.result * this.secondnumber;
      }
    } else if (this.operation == "-") {

      if (isNaN(this.result)) {

        this.result = this.firstnumber - this.secondnumber;

      }
      else {
        this.result = this.result - this.secondnumber;
      }


    } else if (this.operation == "/") {

      if (isNaN(this.result)) {

        this.result = this.firstnumber / this.secondnumber;

      }
      else {
        this.result = this.result / this.secondnumber;
      }

    } else if (isNaN(this.firstnumber)) {
      this.result = this.secondnumber;
    }
    if (isNaN(this.result)){
      this.result=0;
    } 
    document.getElementById("Resultat").innerHTML = "";
    document.getElementById("Resultat").innerHTML = this.result;
    document.getElementById("Digit").innerHTML = "";


    this.coma = 0;

    return;


  }
  buttonfactorial() {


    this.firstnumber = document.getElementById("Digit").innerHTML;

    if (this.firstnumber == 0 || this.firstnumber == 1)

      this.firstnumber = 1;

    for (var i = this.firstnumber - 1; i >= 1; i--) {
      this.firstnumber *= i;

    }
    if (isNaN(this.firstnumber)){
      this.firstnumber=0;
    } 
    document.getElementById("Resultat").innerHTML = this.firstnumber;
    document.getElementById("Digit").innerHTML = "";
   
  }

  buttonQ() {

    this.firstnumber = document.getElementById("Digit").innerHTML;
    this.result = Math.sqrt(parseInt(document.getElementById("Digit").innerHTML));
    if (isNaN(this.result)){
      this.result=0;
    } 
    document.getElementById("Resultat").innerHTML = this.result;
    document.getElementById("Operacio").innerHTML = "";
  }


  buttonM() {

    if (this.list == 0) {

      document.getElementById("Digit").innerHTML = "ERROR Activa el modo List";

    } else {

      if (isNaN(this.firstnumber)){
        this.firstnumber=0;
      } 
      this.firstnumber = parseFloat(document.getElementById("Digit").innerHTML);
      document.getElementById("Digit").innerHTML = "";



    }

  }
  buttonL() {
    document.getElementById("Digit").innerHTML = "";

    this.list = 1;

  }


  buttonV() {
    
    this.firstnumber = parseFloat(document.getElementById("Digit").innerHTML);
    document.getElementById("Digit").innerHTML = "";
    var Arrays = [this.firstnumber];
    for (var i = 0; i < Arrays.length; i++) {

      document.getElementById("Resultat").innerHTML += Arrays[i] + ",";

    }


  }
}
