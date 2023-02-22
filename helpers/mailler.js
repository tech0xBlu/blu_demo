require("dotenv").config();
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(email, code, type) {
  try {

    const senderAddress = process.env.EMAIL_USERNAME_NOREPLY;

    var toAddress = email;

    if (type == 1) {

      var subject = "Activate Your Email";

      // The body of the email for recipients
      var body_html = `<!DOCTYPE html>
            <html>
                <head>
                    <!-- <title></title> -->
                    <!-- <link rel="stylesheet" href="index.css"> -->
                    <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <script
                    src="https://code.jquery.com/jquery-3.6.0.min.js"
                    integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
                    crossorigin="anonymous"></script> -->
                    <style>
                        .card{
                          /* background-image: url(.${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/bg-img.png); */
                          /* height:600px; */
                          
                        }
                        .card1{
                            margin-top: 20px;
                        }
                        .card-background{
                          /* background-image: url(${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/bg-img.png); */
                          /* background-size: 400px auto; */
                          background-repeat: no-repeat;
                        }
                        .logo{
                          background-image: url(${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/img1.png);
                          background-repeat: no-repeat;
                          background-position: 50% 0%;
                          width: 700px;
                          margin-left: -30px;
                        }
                        .parent-div{
                          position: relative;
                          display:flex;
                          justify-content: center;
                        }
                        .bottom-img{
                          width: 700px;
                          margin-top: 30px;
                        }
                        .text-top-left {
                          position: absolute;
                          top: 30px;
                          text-align: center;
                        }
                        .rectangle{
                          height:auto;
                          background-color: #88A4F0;
                          padding: 5px;
                          border-radius: 7px;
                          font-weight: 700;
                          font-size: 14px;
                        }
                        .mail-img > img{
                          width: 200px;
                        }
            
                        /* without bootstrap cdn work */
                        .mt-4, .mt-3, .mt-2, .mt-5{
                          margin-top: 20px;
                        }
                        .col-sm-4{
                          width:700px;
                          height:auto;
                        }
                        .rectangle{
                          text-align: center;
                          width: 80%;
                          margin-left: 9%;
                        }
                        .mail-img{
                          text-align: center;
                          margin-top: 40px;
                        }
                        .button{
                          text-align: center;
                        }
                        .card-body{
                          width:90%;
                          padding-left:30px;
                        }
                        h6{
                          text-align: center;
                          font-weight: 700;
                          font-size: 15px;
                          padding-top: 20px;
                        }
                        .img1{
                          width: 400px;
                          margin-top: 55px;
                        }
                        .rectanle-sm{
                          height:40px;
                          width:200px;
                          background-color: #000000;
                          font-size: 18px;
                          padding: 2px 20px;
                          border: 1px solid #083DCC;
                        }
                        .rect{
                          height:30px;
                          width:200px;
                          background-color: #000000;
                          font-size: 15px;
                          padding: 2px 1px 2px 10px;
                          border: 1px solid #083DCC;
                        }
                        .rect1{
                          height:30px;
                          width:200px;
                          background-color: #FFFFFF;
                          font-size: 15px;
                          padding: 2px 70px;
                        }
                        .social-img{
                          margin:auto;
                        }
                        .social-imgs{
                          height:30px;
                        }
            
                    </style>
                </head>
                <body style="margin-left:15px;margin-right:15px;">
                    <div class="row">
                        <div class="col-sm-4" style="margin:auto;text-align: center;">
                            <div class="card card1">
                              <div class="card-background">
                                <div class="card-body">
                                  <div class="logo">
                                  <div class="mt-4">
                                    <img class="img1" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/coinuniverze-logo.png" alt="">
                                    <h1 style="margin-top:60px;font-size:30px;color:#000000">Dear Customer,</h1>
                                    <p style="margin-top:-13px;font-size:20px;color:#000000">Thank you for being a part of CoinUniverze.</p>
                                    <p style="margin-top:-13px;font-size:20px;color:#000000">Your One Time Password (OTP) for account activation </p>
                                  </div>
                                  
                                  <div style="margin-top:-40px">
                                   <div style="display:flex;">
                                      <div style="width:20%"><img src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/left-img.png" alt=""></div>
                                      <div style="width:60%"><h1 style="margin-top:25%;font-size:30px;color:#000000">${code}</h1></div>
                                      <div style="width:20%"><img src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/right-img.png" alt="" style="margin-left: -47px;"></div>
                                   </div>
                                   <div>
                                    <p style="margin-top: -50px;font-size:20px;color:#000000">This OTP will be valid for the next 10 minutes after receiving this email.For the security of your account, please do not share your OTP with anyone.</p>
                                    <p style="margin-top: -50px;font-size:20px;color:#000000">If you didn't initiate this request or have any queries regarding it, kindly connect to ${process.env.EMAIL_USERNAME}.</p>
                                    <div class="text-center">
                                      <h4 style="font-size:20px;color:#000000"> &nbsp;&nbsp;<span style="">Sincerely,</span></h4>
                                      <h4 style="font-size:20px;color:#000000"> &nbsp;&nbsp;<span style="">CoinUniverze Team</span></h4> 
                                    </div>
                                   </div>
            
                                  </div>
            <div style="color:#000000;margin-top: -7px;">
                                        <p>Keep your account safe from phishing attacks. <br>
                                          Set your phishing code,<span style="font-weight:700">here.</span></p>
                                      </div>
             <div >
                                        <div>
                                          <h1 style="color:#FFFFFF;margin-top: -7px;"><span class="rect">Anti-phishing &nbsp;&nbsp;<span class="rect1"></span></h1>
                                        </div>
                                      </div>
                                 
                                  <img class="bottom-img" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/bottom-bg-img.png" alt="">
                                      <div class="social-img" style="margin-top:20px;margin-bottom:20px">
                                        <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img1.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                        <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img2.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                        <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img3.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                        <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img4.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                        <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img5.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                        <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img6.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                        <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img7.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                      </div>
                                    </div>
                                  </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                        </div>
                    </div>
                </body>
            </html>`
    }

    if (type == 2) {

      var subject = "For Reset Your Password";

      // The body of the email for recipients
      var body_html = `<!DOCTYPE html>
            <html>
                <head>
                    <!-- <title></title> -->
                    <!-- <link rel="stylesheet" href="index.css"> -->
                    <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <script
                    src="https://code.jquery.com/jquery-3.6.0.min.js"
                    integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
                    crossorigin="anonymous"></script> -->
                    <style>
                        .card{
                          /* background-image: url(.${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/bg-img.png); */
                          /* height:600px; */
                          
                        }
                        .card1{
                            margin-top: 20px;
                        }
                        .card-background{
                          /* background-image: url(${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/bg-img.png); */
                          /* background-size: 400px auto; */
                          background-repeat: no-repeat;
                        }
                        .logo{
                          background-image: url(${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/img1.png);
                          background-repeat: no-repeat;
                          background-position: 50% 0%;
                          width: 700px;
                          margin-left: -30px;
                        }
                        .parent-div{
                          position: relative;
                          display:flex;
                          justify-content: center;
                        }
                        .bottom-img{
                          width: 700px;
                          margin-top: 30px;
                        }
                        .text-top-left {
                          position: absolute;
                          top: 30px;
                          text-align: center;
                        }
                        .rectangle{
                          height:auto;
                          background-color: #88A4F0;
                          padding: 5px;
                          border-radius: 7px;
                          font-weight: 700;
                          font-size: 14px;
                        }
                        .mail-img > img{
                          width: 200px;
                        }
            
                        /* without bootstrap cdn work */
                        .mt-4, .mt-3, .mt-2, .mt-5{
                          margin-top: 20px;
                        }
                        .col-sm-4{
                          width:700px;
                          height:auto;
                        }
                        .rectangle{
                          text-align: center;
                          width: 80%;
                          margin-left: 9%;
                        }
                        .mail-img{
                          text-align: center;
                          margin-top: 40px;
                        }
                        .button{
                          text-align: center;
                        }
                        .card-body{
                          width:90%;
                          padding-left:30px;
                        }
                        h6{
                          text-align: center;
                          font-weight: 700;
                          font-size: 15px;
                          padding-top: 20px;
                        }
                        .img1{
                          width: 400px;
                          margin-top: 55px;
                        }
                        .rectanle-sm{
                          height:40px;
                          width:200px;
                          background-color: #000000;
                          font-size: 18px;
                          padding: 2px 20px;
                          border: 1px solid #083DCC;
                        }
                        .rect{
                          height:30px;
                          width:200px;
                          background-color: #000000;
                          font-size: 15px;
                          padding: 2px 1px 2px 10px;
                          border: 1px solid #083DCC;
                        }
                        .rect1{
                          height:30px;
                          width:200px;
                          background-color: #FFFFFF;
                          font-size: 15px;
                          padding: 2px 70px;
                        }
                        .social-img{
                          margin:auto;
                        }
                        .social-imgs{
                          height:30px;
                        }
            
                    </style>
                </head>
                <body style="margin-left:15px;margin-right:15px;">
                    <div class="row">
                        <div class="col-sm-4" style="margin:auto;text-align: center;">
                            <div class="card card1">
                              <div class="card-background">
                                <div class="card-body">
                                  <div class="logo">
                                  <div class="mt-4">
                                    <img class="img1" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/coinuniverze-logo.png" alt="">
                                    <h1 style="margin-top:60px;font-size:30px;color:#000000">Dear Customer,</h1>
                                    <p style="margin-top:-13px;font-size:20px;color:#000000">Thank you for being a part of CoinUniverze.</p>
                                    <p style="margin-top:-13px;font-size:20px;color:#000000">We have received your request for reset your Login Password of your CoinUniverze account. </p>
                                    <p style="margin-top:-13px;font-size:20px;color:#000000">Your One Time Password (OTP) is </p>
                                  </div>
                                  
                                  <div style="margin-top:-40px">
                                   <div style="display:flex;">
                                      <div style="width:20%"><img src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/left-img.png" alt=""></div>
                                      <div style="width:60%"><h1 style="margin-top:25%;font-size:30px;color:#000000">${code}</h1></div>
                                      <div style="width:20%"><img src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/right-img.png" alt="" style="margin-left: -47px;"></div>
                                   </div>
                                   <div>
                                    <p style="margin-top: -50px;font-size:20px;color:#000000">This OTP will be valid for the next 10 minutes after receiving this email.For the security of your account, please do not share your OTP with anyone.</p>
                                    <p style="margin-top: -50px;font-size:20px;color:#000000">If you didn't initiate this request or have any queries regarding it, kindly connect to ${process.env.EMAIL_USERNAME}.</p>
                                    <div class="text-center">
                                      <h4 style="font-size:20px;color:#000000"> &nbsp;&nbsp;<span style="">Sincerely,</span></h4>
                                      <h4 style="font-size:20px;color:#000000"> &nbsp;&nbsp;<span style="">CoinUniverze Team</span></h4> 
                                    </div>
                                   </div>
            
                                  </div>
            <div style="color:#000000;margin-top: -7px;">
                                        <p>Keep your account safe from phishing attacks. <br>
                                          Set your phishing code,<span style="font-weight:700">here.</span></p>
                                      </div>
             <div >
                                        <div>
                                          <h1 style="color:#FFFFFF;margin-top: -7px;"><span class="rect">Anti-phishing &nbsp;&nbsp;<span class="rect1"></span></h1>
                                        </div>
                                      </div>
                                 
                                  <img class="bottom-img" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/bottom-bg-img.png" alt="">
                                      <div class="social-img" style="margin-top:20px;margin-bottom:20px">
                                        <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img1.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                        <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img2.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                        <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img3.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                        <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img4.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                        <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img5.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                        <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img6.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                        <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img7.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                      </div>
                                    </div>
                                  </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                        </div>
                    </div>
                </body>
            </html>`
    }
    if (type == 3) {

      var subject = "2FA EMAIL OTP";

      // The body of the email for recipients
      var body_html = `<!DOCTYPE html>
            <html>
                <head>
                    <!-- <title></title> -->
                    <!-- <link rel="stylesheet" href="index.css"> -->
                    <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <script
                    src="https://code.jquery.com/jquery-3.6.0.min.js"
                    integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
                    crossorigin="anonymous"></script> -->
                    <style>
                        .card{
                          /* background-image: url(.${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/bg-img.png); */
                          /* height:600px; */
                          
                        }
                        .card1{
                            margin-top: 20px;
                        }
                        .card-background{
                          /* background-image: url(${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/bg-img.png); */
                          /* background-size: 400px auto; */
                          background-repeat: no-repeat;
                        }
                        .logo{
                          background-image: url(${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/img1.png);
                          background-repeat: no-repeat;
                          background-position: 50% 0%;
                          width: 700px;
                          margin-left: -30px;
                        }
                        .parent-div{
                          position: relative;
                          display:flex;
                          justify-content: center;
                        }
                        .bottom-img{
                          width: 700px;
                          margin-top: 30px;
                        }
                        .text-top-left {
                          position: absolute;
                          top: 30px;
                          text-align: center;
                        }
                        .rectangle{
                          height:auto;
                          background-color: #88A4F0;
                          padding: 5px;
                          border-radius: 7px;
                          font-weight: 700;
                          font-size: 14px;
                        }
                        .mail-img > img{
                          width: 200px;
                        }
            
                        /* without bootstrap cdn work */
                        .mt-4, .mt-3, .mt-2, .mt-5{
                          margin-top: 20px;
                        }
                        .col-sm-4{
                          width:700px;
                          height:auto;
                        }
                        .rectangle{
                          text-align: center;
                          width: 80%;
                          margin-left: 9%;
                        }
                        .mail-img{
                          text-align: center;
                          margin-top: 40px;
                        }
                        .button{
                          text-align: center;
                        }
                        .card-body{
                          width:90%;
                          padding-left:30px;
                        }
                        h6{
                          text-align: center;
                          font-weight: 700;
                          font-size: 15px;
                          padding-top: 20px;
                        }
                        .img1{
                          width: 400px;
                          margin-top: 55px;
                        }
                        .rectanle-sm{
                          height:40px;
                          width:200px;
                          background-color: #000000;
                          font-size: 18px;
                          padding: 2px 20px;
                          border: 1px solid #083DCC;
                        }
                        .rect{
                          height:30px;
                          width:200px;
                          background-color: #000000;
                          font-size: 15px;
                          padding: 2px 1px 2px 10px;
                          border: 1px solid #083DCC;
                        }
                        .rect1{
                          height:30px;
                          width:200px;
                          background-color: #FFFFFF;
                          font-size: 15px;
                          padding: 2px 70px;
                        }
                        .social-img{
                          margin:auto;
                        }
                        .social-imgs{
                          height:30px;
                        }
            
                    </style>
                </head>
                <body style="margin-left:15px;margin-right:15px;">
                    <div class="row">
                        <div class="col-sm-4" style="margin:auto;text-align: center;">
                            <div class="card card1">
                              <div class="card-background">
                                <div class="card-body">
                                  <div class="logo">
                                  <div class="mt-4">
                                    <img class="img1" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/coinuniverze-logo.png" alt="">
                                    <h1 style="margin-top:60px;font-size:30px;color:#000000">Dear Customer,</h1>
                                    <p style="margin-top:-13px;font-size:20px;color:#000000">Thank you for being a part of CoinUniverze.</p>
                                    <p style="margin-top:-13px;font-size:20px;color:#000000">We have received your request for the two-factor authentication of your CoinUniverze account. </p>
                                    <p style="margin-top:-13px;font-size:20px;color:#000000">Your One Time Password (OTP) for authentication is </p>
                                  </div>
                                  
                                  <div style="margin-top:-40px">
                                   <div style="display:flex;">
                                      <div style="width:20%"><img src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/left-img.png" alt=""></div>
                                      <div style="width:60%"><h1 style="margin-top:25%;font-size:30px;color:#000000">${code}</h1></div>
                                      <div style="width:20%"><img src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/right-img.png" alt="" style="margin-left: -47px;"></div>
                                   </div>
                                   <div>
                                    <p style="margin-top: -50px;font-size:20px;color:#000000">This OTP will be valid for the next 10 minutes after receiving this email.For the security of your account, please do not share your OTP with anyone.</p>
                                    <p style="margin-top: -50px;font-size:20px;color:#000000">If you didn't initiate this request or have any queries regarding it, kindly connect to ${process.env.EMAIL_USERNAME}.</p>
                                    <div class="text-center">
                                      <h4 style="font-size:20px;color:#000000"> &nbsp;&nbsp;<span style="">Sincerely,</span></h4>
                                      <h4 style="font-size:20px;color:#000000"> &nbsp;&nbsp;<span style="">CoinUniverze Team</span></h4> 
                                    </div>
                                   </div>
            
                                  </div>
            <div style="color:#000000;margin-top: -7px;">
                                        <p>Keep your account safe from phishing attacks. <br>
                                          Set your phishing code,<span style="font-weight:700">here.</span></p>
                                      </div>
             <div >
                                        <div>
                                          <h1 style="color:#FFFFFF;margin-top: -7px;"><span class="rect">Anti-phishing &nbsp;&nbsp;<span class="rect1"></span></h1>
                                        </div>
                                      </div>
                                 
                                  <img class="bottom-img" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/bottom-bg-img.png" alt="">
                                      <div class="social-img" style="margin-top:20px;margin-bottom:20px">
                                        <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img1.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                        <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img2.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                        <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img3.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                        <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img4.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                        <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img5.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                        <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img6.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                        <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img7.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                      </div>
                                    </div>
                                  </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                        </div>
                    </div>
                </body>
            </html>`
    }
    if (type == 4) {

      var subject = "For Reset MPIN :";

      var body_html = `<!DOCTYPE html>
            <html>
                <head>
                    <!-- <title></title> -->
                    <!-- <link rel="stylesheet" href="index.css"> -->
                    <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <script
                    src="https://code.jquery.com/jquery-3.6.0.min.js"
                    integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
                    crossorigin="anonymous"></script> -->
                    <style>
                        .card{
                          /* background-image: url(.${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/bg-img.png); */
                          /* height:600px; */
                          
                        }
                        .card1{
                            margin-top: 20px;
                        }
                        .card-background{
                          /* background-image: url(${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/bg-img.png); */
                          /* background-size: 400px auto; */
                          background-repeat: no-repeat;
                        }
                        .logo{
                          background-image: url(${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/img1.png);
                          background-repeat: no-repeat;
                          background-position: 50% 0%;
                          width: 700px;
                          margin-left: -30px;
                        }
                        .parent-div{
                          position: relative;
                          display:flex;
                          justify-content: center;
                        }
                        .bottom-img{
                          width: 700px;
                          margin-top: 30px;
                        }
                        .text-top-left {
                          position: absolute;
                          top: 30px;
                          text-align: center;
                        }
                        .rectangle{
                          height:auto;
                          background-color: #88A4F0;
                          padding: 5px;
                          border-radius: 7px;
                          font-weight: 700;
                          font-size: 14px;
                        }
                        .mail-img > img{
                          width: 200px;
                        }
            
                        /* without bootstrap cdn work */
                        .mt-4, .mt-3, .mt-2, .mt-5{
                          margin-top: 20px;
                        }
                        .col-sm-4{
                          width:700px;
                          height:auto;
                        }
                        .rectangle{
                          text-align: center;
                          width: 80%;
                          margin-left: 9%;
                        }
                        .mail-img{
                          text-align: center;
                          margin-top: 40px;
                        }
                        .button{
                          text-align: center;
                        }
                        .card-body{
                          width:90%;
                          padding-left:30px;
                        }
                        h6{
                          text-align: center;
                          font-weight: 700;
                          font-size: 15px;
                          padding-top: 20px;
                        }
                        .img1{
                          width: 400px;
                          margin-top: 55px;
                        }
                        .rectanle-sm{
                          height:40px;
                          width:200px;
                          background-color: #000000;
                          font-size: 18px;
                          padding: 2px 20px;
                          border: 1px solid #083DCC;
                        }
                        .rect{
                          height:30px;
                          width:200px;
                          background-color: #000000;
                          font-size: 15px;
                          padding: 2px 1px 2px 10px;
                          border: 1px solid #083DCC;
                        }
                        .rect1{
                          height:30px;
                          width:200px;
                          background-color: #FFFFFF;
                          font-size: 15px;
                          padding: 2px 70px;
                        }
                        .social-img{
                          margin:auto;
                        }
                        .social-imgs{
                          height:30px;
                        }
            
                    </style>
                </head>
                <body style="margin-left:15px;margin-right:15px;">
                    <div class="row">
                        <div class="col-sm-4" style="margin:auto;text-align: center;">
                            <div class="card card1">
                              <div class="card-background">
                                <div class="card-body">
                                  <div class="logo">
                                  <div class="mt-4">
                                    <img class="img1" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/coinuniverze-logo.png" alt="">
                                    <h1 style="margin-top:60px;font-size:30px;color:#000000">Dear Customer,</h1>
                                    <p style="margin-top:-13px;font-size:20px;color:#000000">Thank you for being a part of CoinUniverze.</p>
                                    <p style="margin-top:-13px;font-size:20px;color:#000000">We have received your request for reset MPIN of your CoinUniverze account. </p>
                                    <p style="margin-top:-13px;font-size:20px;color:#000000">Your One Time Password (OTP) is </p>
                                  </div>
                                  
                                  <div style="margin-top:-40px">
                                   <div style="display:flex;">
                                      <div style="width:20%"><img src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/left-img.png" alt=""></div>
                                      <div style="width:60%"><h1 style="margin-top:25%;font-size:30px;color:#000000">${code}</h1></div>
                                      <div style="width:20%"><img src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/right-img.png" alt="" style="margin-left: -47px;"></div>
                                   </div>
                                   <div>
                                    <p style="margin-top: -50px;font-size:20px;color:#000000">This OTP will be valid for the next 10 minutes after receiving this email.For the security of your account, please do not share your OTP with anyone.</p>
                                    <p style="margin-top: -50px;font-size:20px;color:#000000">If you didn't initiate this request or have any queries regarding it, kindly connect to ${process.env.EMAIL_USERNAME}.</p>
                                    <div class="text-center">
                                      <h4 style="font-size:20px;color:#000000"> &nbsp;&nbsp;<span style="">Sincerely,</span></h4>
                                      <h4 style="font-size:20px;color:#000000"> &nbsp;&nbsp;<span style="">CoinUniverze Team</span></h4> 
                                    </div>
                                   </div>
            
                                  </div>
            <div style="color:#000000;margin-top: -7px;">
                                        <p>Keep your account safe from phishing attacks. <br>
                                          Set your phishing code,<span style="font-weight:700">here.</span></p>
                                      </div>
             <div >
                                        <div>
                                          <h1 style="color:#FFFFFF;margin-top: -7px;"><span class="rect">Anti-phishing &nbsp;&nbsp;<span class="rect1"></span></h1>
                                        </div>
                                      </div>
                                 
                                  <img class="bottom-img" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/bottom-bg-img.png" alt="">
                                      <div class="social-img" style="margin-top:20px;margin-bottom:20px">
                                        <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img1.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                        <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img2.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                        <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img3.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                        <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img4.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                        <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img5.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                        <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img6.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                        <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img7.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                      </div>
                                    </div>
                                  </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                        </div>
                    </div>
                </body>
            </html>`
    }
    if (type == 5) {

      var subject = "For Your NEW MPIN :";

      var body_html = `<!DOCTYPE html>
            <html>
                <head>
                    <!-- <title></title> -->
                    <!-- <link rel="stylesheet" href="index.css"> -->
                    <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <script
                    src="https://code.jquery.com/jquery-3.6.0.min.js"
                    integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
                    crossorigin="anonymous"></script> -->
                    <style>
                        .card{
                          /* background-image: url(.${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/bg-img.png); */
                          /* height:600px; */
                          
                        }
                        .card1{
                            margin-top: 20px;
                        }
                        .card-background{
                          /* background-image: url(${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/bg-img.png); */
                          /* background-size: 400px auto; */
                          background-repeat: no-repeat;
                        }
                        .logo{
                          background-image: url(${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/img1.png);
                          background-repeat: no-repeat;
                          background-position: 50% 0%;
                          width: 700px;
                          margin-left: -30px;
                        }
                        .parent-div{
                          position: relative;
                          display:flex;
                          justify-content: center;
                        }
                        .bottom-img{
                          width: 700px;
                          margin-top: 30px;
                        }
                        .text-top-left {
                          position: absolute;
                          top: 30px;
                          text-align: center;
                        }
                        .rectangle{
                          height:auto;
                          background-color: #88A4F0;
                          padding: 5px;
                          border-radius: 7px;
                          font-weight: 700;
                          font-size: 14px;
                        }
                        .mail-img > img{
                          width: 200px;
                        }
            
                        /* without bootstrap cdn work */
                        .mt-4, .mt-3, .mt-2, .mt-5{
                          margin-top: 20px;
                        }
                        .col-sm-4{
                          width:700px;
                          height:auto;
                        }
                        .rectangle{
                          text-align: center;
                          width: 80%;
                          margin-left: 9%;
                        }
                        .mail-img{
                          text-align: center;
                          margin-top: 40px;
                        }
                        .button{
                          text-align: center;
                        }
                        .card-body{
                          width:90%;
                          padding-left:30px;
                        }
                        h6{
                          text-align: center;
                          font-weight: 700;
                          font-size: 15px;
                          padding-top: 20px;
                        }
                        .img1{
                          width: 400px;
                          margin-top: 55px;
                        }
                        .rectanle-sm{
                          height:40px;
                          width:200px;
                          background-color: #000000;
                          font-size: 18px;
                          padding: 2px 20px;
                          border: 1px solid #083DCC;
                        }
                        .rect{
                          height:30px;
                          width:200px;
                          background-color: #000000;
                          font-size: 15px;
                          padding: 2px 1px 2px 10px;
                          border: 1px solid #083DCC;
                        }
                        .rect1{
                          height:30px;
                          width:200px;
                          background-color: #FFFFFF;
                          font-size: 15px;
                          padding: 2px 70px;
                        }
                        .social-img{
                          margin:auto;
                        }
                        .social-imgs{
                          height:30px;
                        }
            
                    </style>
                </head>
                <body style="margin-left:15px;margin-right:15px;">
                    <div class="row">
                        <div class="col-sm-4" style="margin:auto;text-align: center;">
                            <div class="card card1">
                              <div class="card-background">
                                <div class="card-body">
                                  <div class="logo">
                                  <div class="mt-4">
                                    <img class="img1" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/coinuniverze-logo.png" alt="">
                                    <h1 style="margin-top:60px;font-size:30px;color:#000000">Dear Customer,</h1>
                                    <p style="margin-top:-13px;font-size:20px;color:#000000">Thank you for being a part of CoinUniverze.</p>
                                    <p style="margin-top:-13px;font-size:20px;color:#000000">We have received your request for New generated MPIN of your CoinUniverze account. </p>
                                    <p style="margin-top:-13px;font-size:20px;color:#000000">Your New MPIN is </p>
                                  </div>
                                  
                                  <div style="margin-top:-40px">
                                   <div style="display:flex;">
                                      <div style="width:20%"><img src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/left-img.png" alt=""></div>
                                      <div style="width:60%"><h1 style="margin-top:25%;font-size:30px;color:#000000">${code}</h1></div>
                                      <div style="width:20%"><img src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/right-img.png" alt="" style="margin-left: -47px;"></div>
                                   </div>
                                   <div>
                                    <p style="margin-top: -50px;font-size:20px;color:#000000">For the security of your account, please do not share your MPIN with anyone.</p>
                                    <p style="margin-top: -50px;font-size:20px;color:#000000">If you didn't initiate this request or have any queries regarding it, kindly connect to ${process.env.EMAIL_USERNAME}.</p>
                                    <div class="text-center">
                                      <h4 style="font-size:20px;color:#000000"> &nbsp;&nbsp;<span style="">Sincerely,</span></h4>
                                      <h4 style="font-size:20px;color:#000000"> &nbsp;&nbsp;<span style="">CoinUniverze Team</span></h4> 
                                    </div>
                                   </div>
            
                                  </div>
            <div style="color:#000000;margin-top: -7px;">
                                        <p>Keep your account safe from phishing attacks. <br>
                                          Set your phishing code,<span style="font-weight:700">here.</span></p>
                                      </div>
             <div >
                                        <div>
                                          <h1 style="color:#FFFFFF;margin-top: -7px;"><span class="rect">Anti-phishing &nbsp;&nbsp;<span class="rect1"></span></h1>
                                        </div>
                                      </div>
                                 
                                  <img class="bottom-img" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/bottom-bg-img.png" alt="">
                                      <div class="social-img" style="margin-top:20px;margin-bottom:20px">
                                        <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img1.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                        <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img2.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                        <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img3.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                        <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img4.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                        <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img5.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                        <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img6.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                        <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img7.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                      </div>
                                    </div>
                                  </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                        </div>
                    </div>
                </body>
            </html>`
    }
    const msg = {
      to: toAddress, // Change to your recipient
      from: {
        email: senderAddress,
        name: 'Coinuniverze'
      }, // Change to your verified sender
      subject: subject,
      html: body_html,
    }
    sgMail.send(msg).then(() => {
      console.log('Message sent')
    })
  } catch (error) {
    console.error("send-email-error", error);
    return {
      error: true,
      message: "Cannot send email",
    };
  }
}

async function emailForTransferPassword(email, code, type) {
  try {

    const senderAddress = process.env.EMAIL_USERNAME_NOREPLY;

    var toAddress = email;

    if (type == 1) {

      var subject = " [ IMPORTANT ] For Second Password Coinuniverze";

      // The body of the email for recipients
      var body_html = `<!DOCTYPE html>
            <html>
                <head>
                    <!-- <title></title> -->
                    <!-- <link rel="stylesheet" href="index.css"> -->
                    <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <script
                    src="https://code.jquery.com/jquery-3.6.0.min.js"
                    integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
                    crossorigin="anonymous"></script> -->
                    <style>
                        .card{
                          /* background-image: url(.${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/bg-img.png); */
                          /* height:600px; */
                          
                        }
                        .card1{
                            margin-top: 20px;
                        }
                        .card-background{
                          /* background-image: url(${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/bg-img.png); */
                          /* background-size: 400px auto; */
                          background-repeat: no-repeat;
                        }
                        .logo{
                          background-image: url(${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/img1.png);
                          background-repeat: no-repeat;
                          background-position: 50% 0%;
                          width: 700px;
                          margin-left: -30px;
                        }
                        .parent-div{
                          position: relative;
                          display:flex;
                          justify-content: center;
                        }
                        .bottom-img{
                          width: 700px;
                          margin-top: 30px;
                        }
                        .text-top-left {
                          position: absolute;
                          top: 30px;
                          text-align: center;
                        }
                        .rectangle{
                          height:auto;
                          background-color: #88A4F0;
                          padding: 5px;
                          border-radius: 7px;
                          font-weight: 700;
                          font-size: 14px;
                        }
                        .mail-img > img{
                          width: 200px;
                        }
            
                        /* without bootstrap cdn work */
                        .mt-4, .mt-3, .mt-2, .mt-5{
                          margin-top: 20px;
                        }
                        .col-sm-4{
                          width:700px;
                          height:auto;
                        }
                        .rectangle{
                          text-align: center;
                          width: 80%;
                          margin-left: 9%;
                        }
                        .mail-img{
                          text-align: center;
                          margin-top: 40px;
                        }
                        .button{
                          text-align: center;
                        }
                        .card-body{
                          width:90%;
                          padding-left:30px;
                        }
                        h6{
                          text-align: center;
                          font-weight: 700;
                          font-size: 15px;
                          padding-top: 20px;
                        }
                        .img1{
                          width: 400px;
                          margin-top: 55px;
                        }
                        .rectanle-sm{
                          height:40px;
                          width:200px;
                          background-color: #000000;
                          font-size: 18px;
                          padding: 2px 20px;
                          border: 1px solid #083DCC;
                        }
                        .rect{
                          height:30px;
                          width:200px;
                          background-color: #000000;
                          font-size: 15px;
                          padding: 2px 1px 2px 10px;
                          border: 1px solid #083DCC;
                        }
                        .rect1{
                          height:30px;
                          width:200px;
                          background-color: #FFFFFF;
                          font-size: 15px;
                          padding: 2px 70px;
                        }
                        .social-img{
                          margin:auto;
                        }
                        .social-imgs{
                          height:30px;
                        }
            
                    </style>
                </head>
                <body style="margin-left:15px;margin-right:15px;">
                    <div class="row">
                        <div class="col-sm-4" style="margin:auto;text-align: center;">
                            <div class="card card1">
                              <div class="card-background">
                                <div class="card-body">
                                  <div class="logo">
                                  <div class="mt-4">
                                    <img class="img1" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/coinuniverze-logo.png" alt="">
                                    <h1 style="margin-top:60px;font-size:30px;color:#000000">Dear Customer,</h1>
                                    <p style="margin-top:-13px;font-size:20px;color:#000000">Thank you for being a part of CoinUniverze.</p>
                                    <p style="margin-top:-13px;font-size:20px;color:#000000">We  are generated Second Password for your CoinUniverze account. </p>
                                    <p style="margin-top:-13px;font-size:20px;color:#000000">The second password for your account is : </p>
                                  </div>
                                  
                                  <div style="margin-top:-40px">
                                   <div style="display:flex;">
                                      <div style="width:20%"><img src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/left-img.png" alt=""></div>
                                      <div style="width:60%"><h1 style="margin-top:25%;font-size:30px;color:#000000">${code}</h1></div>
                                      <div style="width:20%"><img src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/right-img.png" alt="" style="margin-left: -47px;"></div>
                                   </div>
                                   <div>
                                    <p style="margin-top: -50px;font-size:20px;color:#000000">For the security of your account, please do not share this Password with anyone. </p>
                                    <p style="margin-top: -50px;font-size:20px;color:#000000">For any queries or assistance, reach us at ${process.env.EMAIL_USERNAME}.</p>
                                    <div class="text-center">
                                      <h4 style="font-size:20px;color:#000000"> &nbsp;&nbsp;<span style="">Sincerely,</span></h4>
                                      <h4 style="font-size:20px;color:#000000"> &nbsp;&nbsp;<span style="">CoinUniverze Team</span></h4> 
                                    </div>
                                   </div>
            
                                  </div>
            <div style="color:#000000;margin-top: -7px;">
                                        <p> Keep your account safe from phishing attacks. <br>
                                          Set your phishing code,<span style="font-weight:700">here.</span></p>
                                      </div>
             <div >
                                        <div>
                                          <h1 style="color:#FFFFFF;margin-top: -7px;"><span class="rect">Anti-phishing &nbsp;&nbsp;<span class="rect1"></span></h1>
                                        </div>
                                      </div>
                                 
                                  <img class="bottom-img" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/bottom-bg-img.png" alt="">
                                      <div class="social-img" style="margin-top:20px;margin-bottom:20px">
                                        <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img1.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                        <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img2.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                        <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img3.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                        <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img4.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                        <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img5.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                        <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img6.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                        <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img7.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                      </div>
                                    </div>
                                  </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                        </div>
                    </div>
                </body>
            </html>`
    }
    if (type == 2) {

      var subject = "For Reset Second Password";

      var body_html = `<!DOCTYPE html>
            <html>
                <head>
                    <!-- <title></title> -->
                    <!-- <link rel="stylesheet" href="index.css"> -->
                    <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <script
                    src="https://code.jquery.com/jquery-3.6.0.min.js"
                    integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
                    crossorigin="anonymous"></script> -->
                    <style>
                        .card{
                          /* background-image: url(.${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/bg-img.png); */
                          /* height:600px; */
                          
                        }
                        .card1{
                            margin-top: 20px;
                        }
                        .card-background{
                          /* background-image: url(${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/bg-img.png); */
                          /* background-size: 400px auto; */
                          background-repeat: no-repeat;
                        }
                        .logo{
                          background-image: url(${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/img1.png);
                          background-repeat: no-repeat;
                          background-position: 50% 0%;
                          width: 700px;
                          margin-left: -30px;
                        }
                        .parent-div{
                          position: relative;
                          display:flex;
                          justify-content: center;
                        }
                        .bottom-img{
                          width: 700px;
                          margin-top: 30px;
                        }
                        .text-top-left {
                          position: absolute;
                          top: 30px;
                          text-align: center;
                        }
                        .rectangle{
                          height:auto;
                          background-color: #88A4F0;
                          padding: 5px;
                          border-radius: 7px;
                          font-weight: 700;
                          font-size: 14px;
                        }
                        .mail-img > img{
                          width: 200px;
                        }
            
                        /* without bootstrap cdn work */
                        .mt-4, .mt-3, .mt-2, .mt-5{
                          margin-top: 20px;
                        }
                        .col-sm-4{
                          width:700px;
                          height:auto;
                        }
                        .rectangle{
                          text-align: center;
                          width: 80%;
                          margin-left: 9%;
                        }
                        .mail-img{
                          text-align: center;
                          margin-top: 40px;
                        }
                        .button{
                          text-align: center;
                        }
                        .card-body{
                          width:90%;
                          padding-left:30px;
                        }
                        h6{
                          text-align: center;
                          font-weight: 700;
                          font-size: 15px;
                          padding-top: 20px;
                        }
                        .img1{
                          width: 400px;
                          margin-top: 55px;
                        }
                        .rectanle-sm{
                          height:40px;
                          width:200px;
                          background-color: #000000;
                          font-size: 18px;
                          padding: 2px 20px;
                          border: 1px solid #083DCC;
                        }
                        .rect{
                          height:30px;
                          width:200px;
                          background-color: #000000;
                          font-size: 15px;
                          padding: 2px 1px 2px 10px;
                          border: 1px solid #083DCC;
                        }
                        .rect1{
                          height:30px;
                          width:200px;
                          background-color: #FFFFFF;
                          font-size: 15px;
                          padding: 2px 70px;
                        }
                        .social-img{
                          margin:auto;
                        }
                        .social-imgs{
                          height:30px;
                        }
            
                    </style>
                </head>
                <body style="margin-left:15px;margin-right:15px;">
                    <div class="row">
                        <div class="col-sm-4" style="margin:auto;text-align: center;">
                            <div class="card card1">
                              <div class="card-background">
                                <div class="card-body">
                                  <div class="logo">
                                  <div class="mt-4">
                                    <img class="img1" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/coinuniverze-logo.png" alt="">
                                    <h1 style="margin-top:60px;font-size:30px;color:#000000">Dear Customer,</h1>
                                    <p style="margin-top:-13px;font-size:20px;color:#000000">Thank you for being a part of CoinUniverze.</p>
                                    <p style="margin-top:-13px;font-size:20px;color:#000000">We have received your request for reset your Second Password of your CoinUniverze account. </p>
                                    <p style="margin-top:-13px;font-size:20px;color:#000000">Your One Time Password (OTP) for authentication is </p>
                                  </div>
                                  
                                  <div style="margin-top:-40px">
                                   <div style="display:flex;">
                                      <div style="width:20%"><img src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/left-img.png" alt=""></div>
                                      <div style="width:60%"><h1 style="margin-top:25%;font-size:30px;color:#000000">${code}</h1></div>
                                      <div style="width:20%"><img src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/right-img.png" alt="" style="margin-left: -47px;"></div>
                                   </div>
                                   <div>
                                    <p style="margin-top: -50px;font-size:20px;color:#000000">This OTP will be valid for the next 10 minutes after receiving this email.For the security of your account, please do not share your OTP with anyone.</p>
                                    <p style="margin-top: -50px;font-size:20px;color:#000000">If you didn't initiate this request or have any queries regarding it, kindly connect to ${process.env.EMAIL_USERNAME}.</p>
                                    <div class="text-center">
                                      <h4 style="font-size:20px;color:#000000"> &nbsp;&nbsp;<span style="">Sincerely,</span></h4>
                                      <h4 style="font-size:20px;color:#000000"> &nbsp;&nbsp;<span style="">CoinUniverze Team</span></h4> 
                                    </div>
                                   </div>
            
                                  </div>
            <div style="color:#000000;margin-top: -7px;">
                                        <p>Keep your account safe from phishing attacks. <br>
                                          Set your phishing code,<span style="font-weight:700">here.</span></p>
                                      </div>
             <div >
                                        <div>
                                          <h1 style="color:#FFFFFF;margin-top: -7px;"><span class="rect">Anti-phishing &nbsp;&nbsp;<span class="rect1"></span></h1>
                                        </div>
                                      </div>
                                 
                                  <img class="bottom-img" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/bottom-bg-img.png" alt="">
                                      <div class="social-img" style="margin-top:20px;margin-bottom:20px">
                                        <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img1.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                        <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img2.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                        <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img3.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                        <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img4.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                        <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img5.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                        <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img6.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                        <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img7.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                      </div>
                                    </div>
                                  </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                        </div>
                    </div>
                </body>
            </html>`
    }

    const msg = {
      to: toAddress, // Change to your recipient
      from: {
        email: senderAddress,
        name: 'Coinuniverze'
      }, // Change to your verified sender
      subject: subject,
      html: body_html,
    }
    sgMail.send(msg).then(() => {
      console.log('Message sent')
    })
  } catch (error) {
    console.error("send-email-error", error);
    return {
      error: true,
      message: "Cannot send email",
    };
  }
}

async function sendResetPasswordEmail(email, type) {
  try {

    const senderAddress = process.env.EMAIL_USERNAME_NOREPLY;

    var toAddress = email;

    if (type == 1) {
      var subject = "For Password Change Status";

      var body_html = `<!DOCTYPE html>
            <html>
                <head>
                    <!-- <title></title> -->
                    <!-- <link rel="stylesheet" href="index.css"> -->
                    <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <script
                    src="https://code.jquery.com/jquery-3.6.0.min.js"
                    integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
                    crossorigin="anonymous"></script> -->
                    <style>
                        .card{
                          /* background-image: url(.${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/bg-img.png); */
                          /* height:600px; */
                          
                        }
                        .card1{
                            margin-top: 20px;
                        }
                        .card-background{
                          /* background-image: url(${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/bg-img.png); */
                          /* background-size: 400px auto; */
                          background-repeat: no-repeat;
                        }
                        .logo{
                          background-image: url(${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/img1.png);
                          background-repeat: no-repeat;
                          background-position: 50% 0%;
                          width: 700px;
                          margin-left: -30px;
                        }
                        .parent-div{
                          position: relative;
                          display:flex;
                          justify-content: center;
                        }
                        .bottom-img{
                          width: 700px;
                          margin-top: 30px;
                        }
                        .text-top-left {
                          position: absolute;
                          top: 30px;
                          text-align: center;
                        }
                        .rectangle{
                          height:auto;
                          background-color: #88A4F0;
                          padding: 5px;
                          border-radius: 7px;
                          font-weight: 700;
                          font-size: 14px;
                        }
                        .mail-img > img{
                          width: 200px;
                        }
            
                        /* without bootstrap cdn work */
                        .mt-4, .mt-3, .mt-2, .mt-5{
                          margin-top: 20px;
                        }
                        .col-sm-4{
                          width:700px;
                          height:auto;
                        }
                        .rectangle{
                          text-align: center;
                          width: 80%;
                          margin-left: 9%;
                        }
                        .mail-img{
                          text-align: center;
                          margin-top: 40px;
                        }
                        .button{
                          text-align: center;
                        }
                        .card-body{
                          width:90%;
                          padding-left:30px;
                        }
                        h6{
                          text-align: center;
                          font-weight: 700;
                          font-size: 15px;
                          padding-top: 20px;
                        }
                        .img1{
                          width: 400px;
                          margin-top: 55px;
                        }
                        .rectanle-sm{
                          height:40px;
                          width:200px;
                          background-color: #000000;
                          font-size: 18px;
                          padding: 2px 20px;
                          border: 1px solid #083DCC;
                        }
                        .rect{
                          height:30px;
                          width:200px;
                          background-color: #000000;
                          font-size: 15px;
                          padding: 2px 1px 2px 10px;
                          border: 1px solid #083DCC;
                        }
                        .rect1{
                          height:30px;
                          width:200px;
                          background-color: #FFFFFF;
                          font-size: 15px;
                          padding: 2px 70px;
                        }
                        .social-img{
                          margin:auto;
                        }
                        .social-imgs{
                          height:30px;
                        }
            
                    </style>
                </head>
                <body style="margin-left:15px;margin-right:15px;">
                    <div class="row">
                        <div class="col-sm-4" style="margin:auto;text-align: center;">
                            <div class="card card1">
                              <div class="card-background">
                                <div class="card-body">
                                  <div class="logo">
                                  <div class="mt-4">
                                    <img class="img1" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/coinuniverze-logo.png" alt="">
                                    <h1 style="margin-top:60px;font-size:30px;color:#000000">Dear Customer,</h1>
                                    <p style="margin-top:-13px;font-size:20px;color:#000000">Thank you for being a part of CoinUniverze.</p>
                                    <p style="margin-top:-13px;font-size:20px;color:#000000">To login to your account, click here.${process.env.EMAIL_USERNAME}</p>
                                  </div>
                                  
                                  <div style="margin-top:-40px">
                                   <div style="display:flex;">
                                      <div style="width:20%"><img src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/left-img.png" alt=""></div>
                                      <div style="width:60%"><h1 style="margin-top:25%;font-size:30px;color:#000000">Your password has been set successfully.</h1></div>
                                      <div style="width:20%"><img src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/right-img.png" alt="" style="margin-left: -47px;"></div>
                                   </div>
                                   <div>
                                    <p style="margin-top: -50px;font-size:20px;color:#000000">For the security of your account, we suggest you do not share your Password with anyone.</p>
                                    <p style="margin-top: -50px;font-size:20px;color:#000000">For any queries or assistance, reach us at ${process.env.EMAIL_USERNAME}.</p>
                                    <div class="text-center">
                                      <h4 style="font-size:20px;color:#000000"> &nbsp;&nbsp;<span style="">Sincerely,</span></h4>
                                      <h4 style="font-size:20px;color:#000000"> &nbsp;&nbsp;<span style="">CoinUniverze Team</span></h4> 
                                    </div>
                                   </div>
            
                                  </div>
            <div style="color:#000000;margin-top: -7px;">
                                        <p>Keep your account safe from phishing attacks. <br>
                                          Set your phishing code,<span style="font-weight:700">here.</span></p>
                                      </div>
             <div >
                                        <div>
                                          <h1 style="color:#FFFFFF;margin-top: -7px;"><span class="rect">Anti-phishing &nbsp;&nbsp;<span class="rect1"></span></h1>
                                        </div>
                                      </div>
                                 
                                  <img class="bottom-img" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/bottom-bg-img.png" alt="">
                                      <div class="social-img" style="margin-top:20px;margin-bottom:20px">
                                        <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img1.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                        <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img2.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                        <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img3.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                        <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img4.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                        <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img5.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                        <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img6.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                        <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img7.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                      </div>
                                    </div>
                                  </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                        </div>
                    </div>
                </body>
            </html>`
    }
    if (type == 2) {
      var subject = "For Second Password Status";

      var body_html = `<!DOCTYPE html>
      <html>
          <head>
              <!-- <title></title> -->
              <!-- <link rel="stylesheet" href="index.css"> -->
              <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <script
              src="https://code.jquery.com/jquery-3.6.0.min.js"
              integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
              crossorigin="anonymous"></script> -->
              <style>
                  .card{
                    /* background-image: url(.${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/bg-img.png); */
                    /* height:600px; */
                    
                  }
                  .card1{
                      margin-top: 20px;
                  }
                  .card-background{
                    /* background-image: url(${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/bg-img.png); */
                    /* background-size: 400px auto; */
                    background-repeat: no-repeat;
                  }
                  .logo{
                    background-image: url(${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/img1.png);
                    background-repeat: no-repeat;
                    background-position: 50% 0%;
                    width: 700px;
                    margin-left: -30px;
                  }
                  .parent-div{
                    position: relative;
                    display:flex;
                    justify-content: center;
                  }
                  .bottom-img{
                    width: 700px;
                    margin-top: 30px;
                  }
                  .text-top-left {
                    position: absolute;
                    top: 30px;
                    text-align: center;
                  }
                  .rectangle{
                    height:auto;
                    background-color: #88A4F0;
                    padding: 5px;
                    border-radius: 7px;
                    font-weight: 700;
                    font-size: 14px;
                  }
                  .mail-img > img{
                    width: 200px;
                  }
      
                  /* without bootstrap cdn work */
                  .mt-4, .mt-3, .mt-2, .mt-5{
                    margin-top: 20px;
                  }
                  .col-sm-4{
                    width:700px;
                    height:auto;
                  }
                  .rectangle{
                    text-align: center;
                    width: 80%;
                    margin-left: 9%;
                  }
                  .mail-img{
                    text-align: center;
                    margin-top: 40px;
                  }
                  .button{
                    text-align: center;
                  }
                  .card-body{
                    width:90%;
                    padding-left:30px;
                  }
                  h6{
                    text-align: center;
                    font-weight: 700;
                    font-size: 15px;
                    padding-top: 20px;
                  }
                  .img1{
                    width: 400px;
                    margin-top: 55px;
                  }
                  .rectanle-sm{
                    height:40px;
                    width:200px;
                    background-color: #000000;
                    font-size: 18px;
                    padding: 2px 20px;
                    border: 1px solid #083DCC;
                  }
                  .rect{
                    height:30px;
                    width:200px;
                    background-color: #000000;
                    font-size: 15px;
                    padding: 2px 1px 2px 10px;
                    border: 1px solid #083DCC;
                  }
                  .rect1{
                    height:30px;
                    width:200px;
                    background-color: #FFFFFF;
                    font-size: 15px;
                    padding: 2px 70px;
                  }
                  .social-img{
                    margin:auto;
                  }
                  .social-imgs{
                    height:30px;
                  }
      
              </style>
          </head>
          <body style="margin-left:15px;margin-right:15px;">
              <div class="row">
                  <div class="col-sm-4" style="margin:auto;text-align: center;">
                      <div class="card card1">
                        <div class="card-background">
                          <div class="card-body">
                            <div class="logo">
                            <div class="mt-4">
                              <img class="img1" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/coinuniverze-logo.png" alt="">
                              <h1 style="margin-top:60px;font-size:30px;color:#000000">Dear Customer,</h1>
                              <p style="margin-top:-13px;font-size:20px;color:#000000">Thank you for being a part of CoinUniverze.</p>
                              <p style="margin-top:-13px;font-size:20px;color:#000000">To login to your account, click here. ${process.env.EMAIL_USERNAME}.</p>
                            </div>
                            
                            <div style="margin-top:-40px">
                             <div style="display:flex;">
                                <div style="width:20%"><img src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/left-img.png" alt=""></div>
                                <div style="width:60%"><h1 style="margin-top:25%;font-size:30px;color:#000000">Your second password has been set successfully.</h1></div>
                                <div style="width:20%"><img src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/right-img.png" alt="" style="margin-left: -47px;"></div>
                             </div>
                             <div>
                              <p style="margin-top: -50px;font-size:20px;color:#000000">For the security of your account, we suggest you do not share your Second Password with anyone.</p>
                              <p style="margin-top: -50px;font-size:20px;color:#000000">For any queries or assistance, reach us at ${process.env.EMAIL_USERNAME}.</p>
                              <div class="text-center">
                                <h4 style="font-size:20px;color:#000000"> &nbsp;&nbsp;<span style="">Sincerely,</span></h4>
                                <h4 style="font-size:20px;color:#000000"> &nbsp;&nbsp;<span style="">CoinUniverze Team</span></h4> 
                              </div>
                             </div>
      
                            </div>
      <div style="color:#000000;margin-top: -7px;">
                                  <p>Keep your account safe from phishing attacks. <br>
                                    Set your phishing code,<span style="font-weight:700">here.</span></p>
                                </div>
       <div >
                                  <div>
                                    <h1 style="color:#FFFFFF;margin-top: -7px;"><span class="rect">Anti-phishing &nbsp;&nbsp;<span class="rect1"></span></h1>
                                  </div>
                                </div>
                           
                            <img class="bottom-img" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/bottom-bg-img.png" alt="">
                                <div class="social-img" style="margin-top:20px;margin-bottom:20px">
                                  <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img1.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                  <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img2.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                  <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img3.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                  <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img4.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                  <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img5.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                  <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img6.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                  <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img7.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                </div>
                              </div>
                            </div>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
              </div>
          </body>
      </html>`
    }
    if (type == 3) {
      var subject = "For MPIN Status";

      var body_html = `<!DOCTYPE html>
      <html>
          <head>
              <!-- <title></title> -->
              <!-- <link rel="stylesheet" href="index.css"> -->
              <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <script
              src="https://code.jquery.com/jquery-3.6.0.min.js"
              integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
              crossorigin="anonymous"></script> -->
              <style>
                  .card{
                    /* background-image: url(.${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/bg-img.png); */
                    /* height:600px; */
                    
                  }
                  .card1{
                      margin-top: 20px;
                  }
                  .card-background{
                    /* background-image: url(${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/bg-img.png); */
                    /* background-size: 400px auto; */
                    background-repeat: no-repeat;
                  }
                  .logo{
                    background-image: url(${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/img1.png);
                    background-repeat: no-repeat;
                    background-position: 50% 0%;
                    width: 700px;
                    margin-left: -30px;
                  }
                  .parent-div{
                    position: relative;
                    display:flex;
                    justify-content: center;
                  }
                  .bottom-img{
                    width: 700px;
                    margin-top: 30px;
                  }
                  .text-top-left {
                    position: absolute;
                    top: 30px;
                    text-align: center;
                  }
                  .rectangle{
                    height:auto;
                    background-color: #88A4F0;
                    padding: 5px;
                    border-radius: 7px;
                    font-weight: 700;
                    font-size: 14px;
                  }
                  .mail-img > img{
                    width: 200px;
                  }
      
                  /* without bootstrap cdn work */
                  .mt-4, .mt-3, .mt-2, .mt-5{
                    margin-top: 20px;
                  }
                  .col-sm-4{
                    width:700px;
                    height:auto;
                  }
                  .rectangle{
                    text-align: center;
                    width: 80%;
                    margin-left: 9%;
                  }
                  .mail-img{
                    text-align: center;
                    margin-top: 40px;
                  }
                  .button{
                    text-align: center;
                  }
                  .card-body{
                    width:90%;
                    padding-left:30px;
                  }
                  h6{
                    text-align: center;
                    font-weight: 700;
                    font-size: 15px;
                    padding-top: 20px;
                  }
                  .img1{
                    width: 400px;
                    margin-top: 55px;
                  }
                  .rectanle-sm{
                    height:40px;
                    width:200px;
                    background-color: #000000;
                    font-size: 18px;
                    padding: 2px 20px;
                    border: 1px solid #083DCC;
                  }
                  .rect{
                    height:30px;
                    width:200px;
                    background-color: #000000;
                    font-size: 15px;
                    padding: 2px 1px 2px 10px;
                    border: 1px solid #083DCC;
                  }
                  .rect1{
                    height:30px;
                    width:200px;
                    background-color: #FFFFFF;
                    font-size: 15px;
                    padding: 2px 70px;
                  }
                  .social-img{
                    margin:auto;
                  }
                  .social-imgs{
                    height:30px;
                  }
      
              </style>
          </head>
          <body style="margin-left:15px;margin-right:15px;">
              <div class="row">
                  <div class="col-sm-4" style="margin:auto;text-align: center;">
                      <div class="card card1">
                        <div class="card-background">
                          <div class="card-body">
                            <div class="logo">
                            <div class="mt-4">
                              <img class="img1" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/coinuniverze-logo.png" alt="">
                              <h1 style="margin-top:60px;font-size:30px;color:#000000">Dear Customer,</h1>
                              <p style="margin-top:-13px;font-size:20px;color:#000000">Thank you for being a part of CoinUniverze.</p>
                              <p style="margin-top:-13px;font-size:20px;color:#000000">To login to your account, click here.${process.env.EMAIL_USERNAME}. </p>
                            </div>
                            
                            <div style="margin-top:-40px">
                             <div style="display:flex;">
                                <div style="width:20%"><img src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/left-img.png" alt=""></div>
                                <div style="width:60%"><h1 style="margin-top:25%;font-size:30px;color:#000000">Your MPIN has been set successfully</h1></div>
                                <div style="width:20%"><img src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/right-img.png" alt="" style="margin-left: -47px;"></div>
                             </div>
                             <div>
                              <p style="margin-top: -50px;font-size:20px;color:#000000">For the security of your account, we suggest you do not share your MPIN with anyone.</p>
                              <p style="margin-top: -50px;font-size:20px;color:#000000">For any queries or assistance, reach us at ${process.env.EMAIL_USERNAME}.</p>
                              <div class="text-center">
                                <h4 style="font-size:20px;color:#000000"> &nbsp;&nbsp;<span style="">Sincerely,</span></h4>
                                <h4 style="font-size:20px;color:#000000"> &nbsp;&nbsp;<span style="">CoinUniverze Team</span></h4> 
                              </div>
                             </div>
      
                            </div>
      <div style="color:#000000;margin-top: -7px;">
                                  <p>Keep your account safe from phishing attacks. <br>
                                    Set your phishing code,<span style="font-weight:700">here.</span></p>
                                </div>
       <div >
                                  <div>
                                    <h1 style="color:#FFFFFF;margin-top: -7px;"><span class="rect">Anti-phishing &nbsp;&nbsp;<span class="rect1"></span></h1>
                                  </div>
                                </div>
                           
                            <img class="bottom-img" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/bottom-bg-img.png" alt="">
                                <div class="social-img" style="margin-top:20px;margin-bottom:20px">
                                  <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img1.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                  <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img2.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                  <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img3.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                  <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img4.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                  <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img5.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                  <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img6.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                  <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img7.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                </div>
                              </div>
                            </div>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
              </div>
          </body>
      </html>`
    }
    if (type == 4) {
      var subject = "Registration Done";

      var body_html = `<!DOCTYPE html>
      <html>
          <head>
              <!-- <title></title> -->
              <!-- <link rel="stylesheet" href="index.css"> -->
              <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <script
              src="https://code.jquery.com/jquery-3.6.0.min.js"
              integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
              crossorigin="anonymous"></script> -->
              <style>
                  .card{
                    /* background-image: url(.${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/bg-img.png); */
                    /* height:600px; */
                    
                  }
                  .card1{
                      margin-top: 20px;
                  }
                  .card-background{
                    /* background-image: url(${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/bg-img.png); */
                    /* background-size: 400px auto; */
                    background-repeat: no-repeat;
                  }
                  .logo{
                    background-image: url(${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/img1.png);
                    background-repeat: no-repeat;
                    background-position: 50% 0%;
                    width: 700px;
                    margin-left: -30px;
                  }
                  .parent-div{
                    position: relative;
                    display:flex;
                    justify-content: center;
                  }
                  .bottom-img{
                    width: 700px;
                    margin-top: 30px;
                  }
                  .text-top-left {
                    position: absolute;
                    top: 30px;
                    text-align: center;
                  }
                  .rectangle{
                    height:auto;
                    background-color: #88A4F0;
                    padding: 5px;
                    border-radius: 7px;
                    font-weight: 700;
                    font-size: 14px;
                  }
                  .mail-img > img{
                    width: 200px;
                  }
      
                  /* without bootstrap cdn work */
                  .mt-4, .mt-3, .mt-2, .mt-5{
                    margin-top: 20px;
                  }
                  .col-sm-4{
                    width:700px;
                    height:auto;
                  }
                  .rectangle{
                    text-align: center;
                    width: 80%;
                    margin-left: 9%;
                  }
                  .mail-img{
                    text-align: center;
                    margin-top: 40px;
                  }
                  .button{
                    text-align: center;
                  }
                  .card-body{
                    width:90%;
                    padding-left:30px;
                  }
                  h6{
                    text-align: center;
                    font-weight: 700;
                    font-size: 15px;
                    padding-top: 20px;
                  }
                  .img1{
                    width: 400px;
                    margin-top: 55px;
                  }
                  .rectanle-sm{
                    height:40px;
                    width:200px;
                    background-color: #000000;
                    font-size: 18px;
                    padding: 2px 20px;
                    border: 1px solid #083DCC;
                  }
                  .rect{
                    height:30px;
                    width:200px;
                    background-color: #000000;
                    font-size: 15px;
                    padding: 2px 1px 2px 10px;
                    border: 1px solid #083DCC;
                  }
                  .rect1{
                    height:30px;
                    width:200px;
                    background-color: #FFFFFF;
                    font-size: 15px;
                    padding: 2px 70px;
                  }
                  .social-img{
                    margin:auto;
                  }
                  .social-imgs{
                    height:30px;
                  }
      
              </style>
          </head>
          <body style="margin-left:15px;margin-right:15px;">
              <div class="row">
                  <div class="col-sm-4" style="margin:auto;text-align: center;">
                      <div class="card card1">
                        <div class="card-background">
                          <div class="card-body">
                            <div class="logo">
                            <div class="mt-4">
                              <img class="img1" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/coinuniverze-logo.png" alt="">
                              <h1 style="margin-top:60px;font-size:30px;color:#000000">Dear Customer,</h1>
                              <p style="margin-top:-13px;font-size:20px;color:#000000">Thank you for being a part of CoinUniverze.</p>
                              <p style="margin-top:-13px;font-size:20px;color:#000000">You've successfully completed the user registration process and are now a registered user of the CoinUniverze platform. </p>
                            </div>
                            
                            <div style="margin-top:-40px">
                             <div style="display:flex;">
                                <div style="width:20%"><img src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/left-img.png" alt=""></div>
                                <div style="width:60%"><h1 style="margin-top:25%;font-size:30px;color:#000000">Registration done successfully</h1></div>
                                <div style="width:20%"><img src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/right-img.png" alt="" style="margin-left: -47px;"></div>
                             </div>
                             <div>
                              <p style="margin-top: -50px;font-size:20px;color:#000000">To explore the platform, click here. ${process.env.EMAIL_USERNAME}</p>
                              <p style="margin-top: -50px;font-size:20px;color:#000000">For any queries or assistance, reach us at ${process.env.EMAIL_USERNAME}.</p>
                              <div class="text-center">
                                <h4 style="font-size:20px;color:#000000"> &nbsp;&nbsp;<span style="">Sincerely,</span></h4>
                                <h4 style="font-size:20px;color:#000000"> &nbsp;&nbsp;<span style="">CoinUniverze Team</span></h4> 
                              </div>
                             </div>
      
                            </div>
      <div style="color:#000000;margin-top: -7px;">
                                  <p>Keep your account safe from phishing attacks. <br>
                                    Set your phishing code,<span style="font-weight:700">here.</span></p>
                                </div>
       <div >
                                  <div>
                                    <h1 style="color:#FFFFFF;margin-top: -7px;"><span class="rect">Anti-phishing &nbsp;&nbsp;<span class="rect1"></span></h1>
                                  </div>
                                </div>
                           
                            <img class="bottom-img" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/bottom-bg-img.png" alt="">
                                <div class="social-img" style="margin-top:20px;margin-bottom:20px">
                                  <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img1.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                  <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img2.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                  <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img3.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                  <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img4.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                  <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img5.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                  <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img6.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                  <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img7.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                </div>
                              </div>
                            </div>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
              </div>
          </body>
      </html>`
    }


    const msg = {
      to: toAddress, // Change to your recipient
      from: {
        email: senderAddress,
        name: 'Coinuniverze'
      }, // Change to your verified sender
      subject: subject,
      text: 'and easy to do anywhere, even with Node.js',
      html: body_html,
    }
    sgMail.send(msg).then(() => {
      console.log('Message sent')
    })
  } catch (error) {
    console.error("send-email-error", error);
    return {
      error: true,
      message: "Cannot send email",
    };
  }
}

async function sendQRCodeEmail(email, data_url, SecretKey) {
  try {

    const senderAddress = process.env.EMAIL_USERNAME_NOREPLY;

    var toAddress = email;

    var subject = "Enable 2FA by QR CODE Scan Details";

    // The body of the email for recipients
    var body_html = `<!DOCTYPE html>
    <html>
        <head>
            <!-- <title></title> -->
            <!-- <link rel="stylesheet" href="index.css"> -->
            <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <script
            src="https://code.jquery.com/jquery-3.6.0.min.js"
            integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
            crossorigin="anonymous"></script> -->
            <style>
                .card{
                  /* background-image: url(.${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/bg-img.png); */
                  /* height:600px; */
                  
                }
                .card1{
                    margin-top: 20px;
                }
                .card-background{
                  /* background-image: url(${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/bg-img.png); */
                  /* background-size: 400px auto; */
                  background-repeat: no-repeat;
                }
                .logo{
                  background-image: url(${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/img1.png);
                  background-repeat: no-repeat;
                  background-position: 50% 0%;
                  width: 700px;
                  margin-left: -30px;
                }
                .parent-div{
                  position: relative;
                  display:flex;
                  justify-content: center;
                }
                .bottom-img{
                  width: 700px;
                  margin-top: 30px;
                }
                .text-top-left {
                  position: absolute;
                  top: 30px;
                  text-align: center;
                }
                .rectangle{
                  height:auto;
                  background-color: #88A4F0;
                  padding: 5px;
                  border-radius: 7px;
                  font-weight: 700;
                  font-size: 14px;
                }
                .mail-img > img{
                  width: 200px;
                }
    
                /* without bootstrap cdn work */
                .mt-4, .mt-3, .mt-2, .mt-5{
                  margin-top: 20px;
                }
                .col-sm-4{
                  width:700px;
                  height:auto;
                }
                .rectangle{
                  text-align: center;
                  width: 80%;
                  margin-left: 9%;
                }
                .mail-img{
                  text-align: center;
                  margin-top: 40px;
                }
                .button{
                  text-align: center;
                }
                .card-body{
                  width:90%;
                  padding-left:30px;
                }
                h6{
                  text-align: center;
                  font-weight: 700;
                  font-size: 15px;
                  padding-top: 20px;
                }
                .img1{
                  width: 400px;
                  margin-top: 55px;
                }
                .rectanle-sm{
                  height:40px;
                  width:200px;
                  background-color: #000000;
                  font-size: 18px;
                  padding: 2px 20px;
                  border: 1px solid #083DCC;
                }
                .rect{
                  height:30px;
                  width:200px;
                  background-color: #000000;
                  font-size: 15px;
                  padding: 2px 1px 2px 10px;
                  border: 1px solid #083DCC;
                }
                .rect1{
                  height:30px;
                  width:200px;
                  background-color: #FFFFFF;
                  font-size: 15px;
                  padding: 2px 70px;
                }
                .social-img{
                  margin:auto;
                }
                .social-imgs{
                  height:30px;
                }
    
            </style>
        </head>
        <body style="margin-left:15px;margin-right:15px;">
            <div class="row">
                <div class="col-sm-4" style="margin:auto;text-align: center;">
                    <div class="card card1">
                      <div class="card-background">
                        <div class="card-body">
                          <div class="logo">
                          <div class="mt-4">
                            <img class="img1" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/coinuniverze-logo.png" alt="">
                            <h1 style="margin-top:60px;font-size:30px;color:#000000">Dear Customer,</h1>
                            <p style="margin-top:-13px;font-size:20px;color:#000000">Thank you for being a part of CoinUniverze.</p>
                            <p style="margin-top:-13px;font-size:20px;color:#000000">We have received your request for Two Factor Google Authentication of your CoinUniverze account. </p>
                            <p style="margin-top:-13px;font-size:20px;color:#000000">Your QR code for Google authentication is </p>
                          </div>
                          
                          <div style="margin-top:-40px">
                           <div style="display:flex;">
                              <div style="width:20%"><img src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/left-img.png" alt=""></div>
                              <div style="width:60%"><h1 style="margin-top:25%;font-size:30px;color:#000000">QRCODE HERE</h1></div>
                              <div style="width:20%"><img src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/right-img.png" alt="" style="margin-left: -47px;"></div>
                           </div>
                           <div>
                            <p style="margin-top: -50px;font-size:20px;color:#000000">Please Scan the Qr code for TOTP purpose from any Authenticator apps Scanner. For the security of your account, please do not share your generated QR code with anyone.</p>
                            <p style="margin-top: -50px;font-size:20px;color:#000000">If you didn't initiate this request or have any queries regarding it, kindly connect to ${process.env.EMAIL_USERNAME}.</p>
                            <div class="text-center">
                              <h4 style="font-size:20px;color:#000000"> &nbsp;&nbsp;<span style="">Sincerely,</span></h4>
                              <h4 style="font-size:20px;color:#000000"> &nbsp;&nbsp;<span style="">CoinUniverze Team</span></h4> 
                            </div>
                           </div>
    
                          </div>
    <div style="color:#000000;margin-top: -7px;">
                                <p>Keep your account safe from phishing attacks. <br>
                                  Set your phishing code,<span style="font-weight:700">here.</span></p>
                              </div>
     <div >
                                <div>
                                  <h1 style="color:#FFFFFF;margin-top: -7px;"><span class="rect">Anti-phishing &nbsp;&nbsp;<span class="rect1"></span></h1>
                                </div>
                              </div>
                         
                          <img class="bottom-img" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/bottom-bg-img.png" alt="">
                              <div class="social-img" style="margin-top:20px;margin-bottom:20px">
                                <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img1.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img2.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img3.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img4.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img5.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img6.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                                <img class="social-imgs" src="${process.env.TESTSERVER_COINUNIVERZE_URL}/uploads/emailAssets/social-img7.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;
                              </div>
                            </div>
                          </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </body>
    </html>`

    const msg = {
      to: toAddress, // Change to your recipient
      from: {
        email: senderAddress,
        name: 'Coinuniverze'
      }, // Change to your verified sender
      subject: subject,
      text: 'and easy to do anywhere, even with Node.js',
      html: body_html,
    }
    sgMail.send(msg).then(() => {
      console.log('Message sent')
    })
  } catch (error) {
    console.error("send-email-error", error);
    return {
      error: true,
      message: "Cannot send email",
    };
  }
}




module.exports = { sendEmail, emailForTransferPassword, sendResetPasswordEmail, sendQRCodeEmail };



