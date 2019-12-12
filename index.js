// Created by Daniel Shively

alert("Welcome To My Game\/Code\/Website Thanks For The Support Its Good Thx Ok By.");
// Made with NeoIonJS
// A simple framework made by me
// to make my work easier
onload = function() {
  neo = document.querySelector('script[type=neo-ion]');
  eval(NEO(neo.innerHTML));
}
function NEO(data) {
  data = data.replace(/func=>/gm, 'function ');
  data = data.replace(/_\$html/gm, '.innerHTML');
  data = data.replace(/_\$val/gm, '.value');
  data = data.replace(/_\$evt/gm, '.addEventListener');
  data = data.replace(/_\$/gm, '.style.');
  data = data.replace(/elif/gm, 'else if');
  data = data.replace(/;;/gm, '//');
  data = data.replace(/@begin/gm, '/*');
  data = data.replace(/@end/gm, '*/');
  
  return data;
}
function $(e) {
  return document.querySelector(e);
}

// EOF NeoIonJS
//
//
// Dont Delete This Tag otherwise this
// function will dont work
// </script><script type='neo-ion'>

@begin
  Hacker Terminal [SoloLearn Contest]
        By Daniel Shively
@end

style = document.createElement('style');
document.head.appendChild(style);


;; Add Event Listener To Run The Typing Function
$('#command')_$evt('keyup', run, false);

;; For Typing Function
func=>run() {
  if(event.keyCode == 13) {
    a = $('#command')_$val.toLowerCase();
    $('#command')_$val = "";

    ;; If Command Is List
    if (a == 'list' || a == 'a*help') {
      $('#cmd')_$html = 'enter one command below:<br>'+
      '<e>"list or List"</e> to see all commands<br>'+
      '<e>"connect or Conect"</e> to connect to a server<br>'+
      '<e>"engage or Engage"</e> to show matrix display<br>'+
      '<e>"creator or Creator"</e> to see code info<br>'+
      '<e>"info or Info"</e> to see some easter egg info<br>'+
      '<e>"show_date or Show_date"</e> to show current time<br>'+
      '<e>"recursion or Recursion"</e> to run recursion<br>'+
      '<e>"randomize_ip or Randomize_ip"</e> to randomize your IP<br>'+
      '<e>"hack_roblox or Hack_roblox"</e> to hack ROBLOX server<br>'+
      '<e>"error or Error"</e> to show an error looks<br>'+
      '<e>"error_403 or Error_403"</e> to see a forbidden function<br>'+
      '<e>"error_404 or Error_404"</e> to see a thing that is not in there<br>'+
      '<e>"special or Special"</e> to play guess game here<br>'+
      '<e>"screen_data or Screen_data"</e> to get screen info<br>'+
      '<e>"browser_data or Browser_data"</e> to get browser info';
    }
    ;; If Command Is Creator
    elif (a == 'creator' || a == 'a*maker') {
      $('#cmd')_$html = '<b>About=</b><br>'+
      'Created by: <e>Daniel Shively</e><br>'+
      'Created on: <e>Friday July 12 2019</e><br>'+
      'Technology: <e>HTML, CSS, JS</e><br>'+
      'Co-Creator/Helper: SoloLearn And Aaron Shively And Others'+
      'Frameworks: <e>NeoIonJS And Daniel</e>';
    }
    ;; If Command Is Info
    elif (a == 'info' || a == 'a*i') {
      $('#cmd')_$html = 'Info<br>'+
      'matrix hack: <e>type <b>"engage"</b> and tap enter as many as you want</e><br><br>'+
      'recursion: <e>type <b>"recursion"</b> and tap enter to get recursion</e><br><br>'+
      'background hack: <e>type <b>"&lt;style>body {background: _custom_}&lt;/style>"</b> in command bar and change <b>"_custom_"</b> to a color do you like e.g. blue, red, and default to back to default color</e><br><br>'+
      'guess game help: <e>if you has been completed it, and wanted to play again, type <b>"guess_game"</b> again in command bar</e>';
    }
    ;; If Command Is Connect
    elif (a == 'connect' || a == 'a*con') {
      ip1 = Math.ceil(Math.random()*230);
      ip2 = Math.ceil(Math.random()*210);
      ip3 = Math.ceil(Math.random()*210);
      ip4 = Math.ceil(Math.random()*127);
      ip = ip1+'.'+ip2+'.'+ip3+'.'+ip4;
      rx = Math.ceil(Math.random()*10);
      rx = rx <= 5? 0: 1;
  
      $('#cmd')_$html = 'server IP: '+ip+'<br>'+
      'connecting to server...<br>';
      connect();
      if (rx==1) {
        setTimeout(function() {
          $('#cmd')_$html = 'server IP: '+ip+'<br>'+
          'connecting to server...<br>'+
          '<e>successfully connected...</e><br>'+
          'stealing data...<br><e>data stolen</e>';
        }, 5500);
      }
      if (rx==0) {
        setTimeout(function() {
          $('#cmd')_$html = 'server IP: '+ip+'<br>'+
          'connecting to server...<br>'+
          '<i>connection failed...</i>';
        }, 5500);
      }
    }
    ;; If Command Is Engage
    elif (a == 'engage' || a == 'a*mat') {
      matrix();
    }
    ;; If Command Is Show_Date
    elif (a == 'show_date' || a == 'a*date') {
      setInterval(time, 1);
    }
    ;; If Command Is Recursion
    elif (a == 'recursion' || a == 'a*loop') {
      recursion();
    }
    ;; If Command Is Randomize IP
    elif (a == 'randomize_ip' || a == 'a*ip') {
      randomize();
    }
    ;; If Command Is Hack Server
    elif (a == 'hack_roblox' || a == 'a*hack') {
      hack();
    }
    ;; If Command Is Error
    elif (a == 'error' || a == 'a*e') {
      error();
    }
    ;; If Command Is Error 403
    elif (a == 'error_403' || a == 'a*403') {
      error403();
    }
    ;; If Command Is Error 404
    elif (a == 'error_404' || a == 'a*404') {
      error404();
    }
    ;; If Command Is Special
    elif (a == 'special' || a == 'a*gf') {
      special();
    }
    ;; If Command Is Guess Game
    elif (a == 'guess_game' || a == 'a*gg') {
      guessgame();
    }
    ;; If Command Is Screen Data
    elif (a == 'screen_data' || a == 'a*sd') {
      screen();
    }
    ;; If Command Is Browser Data
    elif (a == 'browser_data' || a == 'a*bd') {
      props();
    }
    ;; If Command Is Undefined
    else {
      $('#cmd')_$html = '<i>error detected...</i><br>'+
      '<i>"'+a+'"</i> is an invalid command.<br><br>'+
      'enter <e>"list"</e> to see all command.<br>'+
      'press any key to continue...';
    }
  }
}

;; Connection Progress Bar
func=>connect() {
  ;; Creating Progress Bar
  progConTag = document.createElement('div');
  progBarTag = document.createElement('div');
  progConAttr = progConTag.setAttribute('id', 'progCon');
  progBarAttr = progBarTag.setAttribute('id', 'progBar');
  $('#cmd').appendChild(progConTag);
  $('#progCon').appendChild(progBarTag);
  
  ;; Setting Progress Bar Holder
  con = $('#progCon');
  con_$width = 'calc(100% - 2px)';
  con_$height = '20px';
  con_$background = 'transparent';
  con_$border = '1px solid #0e0';
  
  ;; Setting Progress Bar
  bar = $('#progBar');
  bar_$width = '100%';
  bar_$height = '20px';
  bar_$background = '#0e0';
  bar_$webkitAnimation = 'loader 5s linear 1';
  bar_$animation = 'loader 5s linear 1';
}

;; Matrix Rain Display
func=>matrix() {
  ;; Made With Some Help Of Website To Create Matrix Rain
  
  ;; Creating Canvas
  canvasTag = document.createElement('canvas');
  canvasAttr = canvasTag.setAttribute('id', '_canvas_');
  $('#cmd').appendChild(canvasTag);
  
  ;; Setting Canvas
  cvs = $('#_canvas_');
  pen = cvs.getContext('2d');

  cvs.height = (window.innerHeight*2)-200;
  cvs.width = window.innerWidth;
  cvs_$position = 'absolute';
  cvs_$top = '0';
  cvs_$left = '0';

  ;; Setting Text
  num = 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもらりるれろやゆよわをんがぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽ';
  size = 10;
  num = num.split('');
  columns = cvs.width/size;
  mtrx = [];
  
  for(x=0; x<columns; x++) {mtrx[x] = 1}

  ;; Drawing Matrix
  func=>draw() {
    pen.fillStyle = 'rgba(10,10,10,.03)';
    pen.fillRect(0, 0, cvs.width, cvs.height);
    pen.fillStyle = '#00e';
    pen.font = size+'px courier';
    
    for(i= 0; i<mtrx.length; i++) {
      text = num[Math.floor(Math.random()*num.length)];
      pen.fillText(text, i*size, mtrx[i]*size);
      
      if (mtrx[i]*size > cvs.height && Math.random() > 0.975)
        {mtrx[i] = 0}
      mtrx[i]++;
    }
  }
  
  ;; Calling Matrix
  setInterval(draw, 50);
}

;; Show Current Time
func=>time() {
  ;; Creating Clock
  dateTag = document.createElement('span');
  dateAttr = dateTag.setAttribute('id', 'date');
  $('#cmd').appendChild(dateTag);
  
  ;; Getting Time Data
  now = new Date();
  yy = now.getFullYear();
  mm = now.getMonth();
  dd = now.getDate();
  ho = now.getHours();
  mi = now.getMinutes();
  se = now.getSeconds();
  
  ;; Setting Time Data
  month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Desember'];
  
  month = month[mm];
  
  ho = ho<10 ? '0'+ho: ho;
  mi = mi<10 ? '0'+mi: mi;
  se = se<10 ? '0'+se: se;
  
  ;; Outputting Time Data
  $('#date')_$html = '<br><br>'+ho+':'+mi+':'+se+', '+dd+' '+month+' '+yy;
}

;; Recursion
func=>recursion() {
  $('#cmd')_$html = '...<br>';
  setInterval(func=>() {
  
  }, 1000);
}

;; Hack Server
func=>hack() {
  ;; Official By Andrew Grider
  ;; Modified By Daniel Shively
  hackText = 'I_n_i_t_i_a_l_i_z_i_n_g_._._._Hacking_._._._<br>'+
    '_<e>Done.</e>_&nbsp_&nbsp_&nbsp_<br>'+
    '_L_o_a_d_i_n_g_ _I_n_t_e_r_f_a_c_e_._._._<br>'+
    '_C_o_l_l_e_c_t_i_n_g_ _D_a_t_a_._._._<br>_<br>'+
    '_Decrypting_ _Data..._<br>'+
    '_S_e_c_u_r_i_n_g_ _C_o_n_n_e_c_t_i_o_n_._._._<br>'+
    '_Connecting..._\n_\n_\n_\n_\n_\n_<br>'+
    'I_n_i_t_i_a_l_i_z_i_n_g_ _S_e_r_v_e_r_._.'+
    '_\n_\n_\n_\n_\n_\n_\n_\n_\n_\n_\n_<br>'+
    '_ A_u_t_h_e_n_t_i_c_a_t_i_n_g_._._Stealing-8,421-Robux_._._._.<br>'+
    '_Obtaining Keypass.._<br>_<e>Connection Successful.</e>_<br>_<br>'+
    '_Redirecting..._\n\n_\n_\n_\n_\n_\n_\n_\n_\n_\n_<br><br>'+
    '_Server_ _Diagnostics_:_<br>IP_:_ _<e>198.162.0.7:2222</e>_<br>'+
    '_Gateway_:_ _<e>225.225.225_ _<e>0_ _<e>Flags_ _<e>up</e>_<br>'+
    '_Server_Address_:_ _<e>175.297.64.75</e>_<br>'+
    '_Username_:_ _<e>ROBLOX</e>_<br>'+
    '_Password_:_ <e>sT3%p@e</e>';
    
  hackText = hackText.split("_")
  count = 0;
  $('#cmd')_$html = '';
  
  func=>startTyping(){
    txt = $("#cmd")_$html;
     
    if (count >= hackText.length) {
      clearInterval(typing);
    }
    else {
      $("#cmd")_$html = txt + hackText[count];
      count++;
    }
  }
  typing = setInterval(startTyping, 100);
}

;; Randomize IP
func=>randomize() {
  ip1 = Math.ceil(Math.random()*230);
  ip2 = Math.ceil(Math.random()*210);
  ip3 = Math.ceil(Math.random()*210);
  ip4 = Math.ceil(Math.random()*127);
  ip = ip1+'.'+ip2+'.'+ip3+'.'+ip4;
  
  $('#cmd')_$html = 'randomizing IP...<br>';
  setTimeout(func=>() {
    $('#cmd')_$html += 'IP randomized<br>';
  }, 2000);
  setTimeout(func=>() {
    $('#cmd')_$html += 'your new IP: <e>'+ip+'</e>';
  }, 2500);
}

;; Error
func=>error() {
  $('#cmd')_$html = '<i>error detected...</i><br>'+
  '<i>"error"</i> is a valid command.<br>'+
  'but you\'re forcing me to show an error. XD<br><br>'+
  'enter <e>"list"</e> to see all command.<br>'+
  'press any key to continue...<br>'+
  'and another key to quit...';
}

;; Error 403
func=>error403() {
  $('#cmd')_$html = '<i>forbidden</i><br>'+
  'but you\'re forcing me to show a forbidden function. XD<br><br>';
}

;; Error 404
func=>error404() {
  $('#cmd')_$html = '<i>error 404</i><br>'+
  'command not found. XD XD<br>'+
  'please fix your command, maybe you mistyping it<br>'+
  'if you are confused, try to type <e>"list"</e> to see all commands';
}

;; Special
func=>special() {
  $('#cmd')_$html = '<b>Special Thanks To My Girlfriend, My Friends, My Followers, and SoloLearn</b><br><br>'+
  'Thank you to you all that is following me, helping me, inspiring me,<br>'+
  'supporting me, and becoming my friends.<br>'+
  'and thanks to <e>SoloLearn</e> for your cool app, lesson, and communities<br>'+
  'thanks to my girlfriend, <e>Art.R.M.Y</e>, that is supporting me here<br><br>'+
  'sorry I can\'t mention you all my friends and my followers here.';
}

;; Guess Game
func=>guessgame() {
  $('#cmd')_$html = '<b>Guess Game</e><br>'+
  'Guess a computer chosen number from 1-100';
  
  inpTag = document.createElement('input');
  inpAttr = inpTag.setAttribute('id', 'inp-ggame');
  btnTag = document.createElement('button');
  btnAttr = btnTag.setAttribute('id', 'btn-ggame');
  outTag = document.createElement('div');
  outAttr = outTag.setAttribute('id', 'out-ggame');
  $('#cmd').appendChild(inpTag);
  $('#cmd').appendChild(btnTag);
  $('#cmd').appendChild(outTag);
  
  chosenNum = Math.ceil(Math.random()*100);
  
  $('#btn-ggame').onclick = playguess;
  
  func=>playguess() {
    guess = parseInt($('#inp-ggame')_$val);
    
    if (guess > chosenNum) {
      $('#out-ggame')_$html += '<i>Wrong! Too high</i><br>';
    }
    if (guess < chosenNum) {
      $('#out-ggame')_$html += '<i>Wrong! Too Low</i><br>';
    }
    if (guess == chosenNum) {
      $('#out-ggame')_$html += '<e>Correct!</e><br><br>Wanna play again?<br>'+
      'type <e>"info"</e> to get a help about how to play again<br>';
    }
  }
}

;; Screen
func=>screen() {
  $('#cmd')_$html = 'getting screen info...<br>';
  setTimeout(func=>(){
    $('#cmd')_$html += '<e>screen info successfully gotten.</e><br><br>';
  }, 1500);
  setTimeout(func=>(){
    $('#cmd')_$html += 'available height: <e>'+window.screen.availHeight+'px</e><br>';
  }, 2000);
  setTimeout(func=>(){
    $('#cmd')_$html += 'available width: <e>'+window.screen.availWidth+'px</e><br>';
  }, 2500);
  setTimeout(func=>(){
    $('#cmd')_$html += 'total height: <e>'+window.screen.height+'px</e><br>';
  }, 3000);
  setTimeout(func=>(){
    $('#cmd')_$html += 'total width: <e>'+window.screen.width+'px</e><br>';
  }, 3500);
  setTimeout(func=>(){
    $('#cmd')_$html += 'color depth: <e>'+window.screen.colorDepth+'</e><br>';
  }, 4000);
  setTimeout(func=>(){
    $('#cmd')_$html += 'color resolution: <e>'+window.screen.pixelDepth+'</e><br>';
  }, 4500);
}

;; Properties
func=>props() {
  $('#cmd')_$html = 'getting browser info...<br>';
  setTimeout(func=>(){
    $('#cmd')_$html += '<e>browser info successfully gotten.</e><br><br>';
  }, 1500);
  setTimeout(func=>(){
    $('#cmd')_$html += 'browser name: <e>'+navigator.appName+'</e><br>';
  }, 2000);
  setTimeout(func=>(){
    $('#cmd')_$html += 'version info: <e>'+navigator.appVersion+'</e><br>';
  }, 2500);
  setTimeout(func=>(){
    $('#cmd')_$html += 'cookies enabled: <e>'+navigator.cookieEnabled+'</e><br>';
  }, 3000);
  setTimeout(func=>(){
    $('#cmd')_$html += 'browser language: <e>'+navigator.language+'</e><br>';
  }, 3500);
  setTimeout(func=>(){
    $('#cmd')_$html += 'browser is online: <e>'+navigator.onLine+'</e><br>';
  }, 4000);
  setTimeout(func=>(){
    $('#cmd')_$html += 'platform: <e>'+navigator.platform+'</e><br>';
  }, 4500);
  setTimeout(func=>(){
    $('#cmd')_$html += 'browser engine: <e>'+navigator.product+'</e><br>';
  }, 5000);
  setTimeout(func=>(){
    $('#cmd')_$html += 'user-agent header: <e>'+navigator.userAgent+'</e><br>';
  }, 5500);
}
