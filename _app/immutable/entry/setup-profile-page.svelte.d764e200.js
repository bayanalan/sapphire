import{S as It,i as Lt,s as wt,k as r,q as d,a as o,l as s,m as l,r as p,h as n,c,n as e,b as A,C as t,D as ot}from"../chunks/index.232fda3f.js";function Ct(bt){let h,C,a,k,Y,K,T,M,z,x,J,Q,_,W,F,f,g,B,X,R,Z,$,u,D,V,tt,et,m,v,b,nt,I,rt,st,S,N,lt,j,it,U,L,w,at;return{c(){h=r("center"),C=r("div"),a=r("ul"),k=r("li"),Y=d("Register"),K=o(),T=r("li"),M=d("Choose Plan"),z=o(),x=r("li"),J=d("Profile"),Q=o(),_=r("li"),W=d("Done!"),F=o(),f=r("html"),g=r("head"),B=r("link"),X=o(),R=r("style"),Z=d(`.hidden-ring {
              border-color: transparent;
            }`),$=o(),u=r("body"),D=r("center"),V=r("a"),tt=d("Profile"),et=o(),m=r("div"),v=r("div"),b=r("input"),nt=o(),I=r("button"),rt=d("Submit"),st=o(),S=r("div"),N=r("div"),lt=o(),j=r("script"),it=d(`function displayFirstLetters() {
              // Get the input value
              const inputValue = document.getElementById('daisyInput').value.trim();
              const outputElement = document.getElementById('output');
              const ringContainer = document.querySelector('.ring-container');
        
              // If the input is empty, set the output to an empty string and hide the ring
              if (inputValue === '') {
                outputElement.innerText = '';
                ringContainer.classList.add('hidden-ring');
                return;
              }
        
              // Split the input value into words
              const words = inputValue.split(' ');
        
              // Extract the first letter of each word and convert to uppercase
              const firstLetters = words.map(word => word.charAt(0).toUpperCase()).join('');
        
              // Display the result in the output element and show the ring
              outputElement.innerText = firstLetters;
              ringContainer.classList.remove('hidden-ring');
            }
        
            // Listen for the "Enter" key press in the input field
            document.getElementById('daisyInput').addEventListener('keydown', function(event) {
              if (event.key === 'Enter') {
                displayFirstLetters();
              }
            });`),U=o(),L=r("center"),w=r("a"),at=d("Next"),this.h()},l(i){h=s(i,"CENTER",{});var y=l(h);C=s(y,"DIV",{class:!0});var ct=l(C);a=s(ct,"UL",{class:!0});var E=l(a);k=s(E,"LI",{class:!0});var ut=l(k);Y=p(ut,"Register"),ut.forEach(n),K=c(E),T=s(E,"LI",{class:!0});var dt=l(T);M=p(dt,"Choose Plan"),dt.forEach(n),z=c(E),x=s(E,"LI",{class:!0,"data-content":!0});var pt=l(x);J=p(pt,"Profile"),pt.forEach(n),Q=c(E),_=s(E,"LI",{class:!0,"data-content":!0});var ht=l(_);W=p(ht,"Done!"),ht.forEach(n),E.forEach(n),ct.forEach(n),y.forEach(n),F=c(i),f=s(i,"HTML",{});var q=l(f);g=s(q,"HEAD",{});var G=l(g);B=s(G,"LINK",{href:!0,rel:!0}),X=c(G),R=s(G,"STYLE",{});var ft=l(R);Z=p(ft,`.hidden-ring {
              border-color: transparent;
            }`),ft.forEach(n),G.forEach(n),$=c(q),u=s(q,"BODY",{class:!0});var P=l(u);D=s(P,"CENTER",{class:!0});var mt=l(D);V=s(mt,"A",{class:!0});var vt=l(V);tt=p(vt,"Profile"),vt.forEach(n),mt.forEach(n),et=c(P),m=s(P,"DIV",{class:!0});var H=l(m);v=s(H,"DIV",{class:!0});var O=l(v);b=s(O,"INPUT",{type:!0,id:!0,placeholder:!0,class:!0}),nt=c(O),I=s(O,"BUTTON",{onclick:!0,class:!0});var yt=l(I);rt=p(yt,"Submit"),yt.forEach(n),O.forEach(n),st=c(H),S=s(H,"DIV",{class:!0});var Et=l(S);N=s(Et,"DIV",{class:!0,id:!0}),l(N).forEach(n),Et.forEach(n),H.forEach(n),lt=c(P),j=s(P,"SCRIPT",{});var xt=l(j);it=p(xt,`function displayFirstLetters() {
              // Get the input value
              const inputValue = document.getElementById('daisyInput').value.trim();
              const outputElement = document.getElementById('output');
              const ringContainer = document.querySelector('.ring-container');
        
              // If the input is empty, set the output to an empty string and hide the ring
              if (inputValue === '') {
                outputElement.innerText = '';
                ringContainer.classList.add('hidden-ring');
                return;
              }
        
              // Split the input value into words
              const words = inputValue.split(' ');
        
              // Extract the first letter of each word and convert to uppercase
              const firstLetters = words.map(word => word.charAt(0).toUpperCase()).join('');
        
              // Display the result in the output element and show the ring
              outputElement.innerText = firstLetters;
              ringContainer.classList.remove('hidden-ring');
            }
        
            // Listen for the "Enter" key press in the input field
            document.getElementById('daisyInput').addEventListener('keydown', function(event) {
              if (event.key === 'Enter') {
                displayFirstLetters();
              }
            });`),xt.forEach(n),P.forEach(n),q.forEach(n),U=c(i),L=s(i,"CENTER",{class:!0});var _t=l(L);w=s(_t,"A",{class:!0,href:!0});var gt=l(w);at=p(gt,"Next"),gt.forEach(n),_t.forEach(n),this.h()},h(){e(k,"class","step step-primary"),e(T,"class","step step-primary"),e(x,"class","step step-primary"),e(x,"data-content","?"),e(_,"class","step"),e(_,"data-content","?"),e(a,"class","steps"),e(C,"class","pt-2"),e(B,"href","https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"),e(B,"rel","stylesheet"),e(V,"class","text-6xl poppins"),e(D,"class","pt-4 pb-6"),e(b,"type","text"),e(b,"id","daisyInput"),e(b,"placeholder","Name"),e(b,"class","poppins text-center rounded-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200"),e(I,"onclick","displayFirstLetters()"),e(I,"class","daisy-outline bg-black rounded-full btn-sm ml-2 px-4 text-white poppins"),e(v,"class","flex items-center mb-4"),e(N,"class","text-xl font-bold"),e(N,"id","output"),e(S,"class","ring-container flex items-center justify-center w-16 h-16 border-2 border-black rounded-full"),e(m,"class","flex flex-col items-center"),e(u,"class","flex flex-col items-center justify-start h-auto pt-10"),e(w,"class","btn btn-outline rounded-full"),e(w,"href","/setup/done"),e(L,"class","mx-auto pt-24")},m(i,y){A(i,h,y),t(h,C),t(C,a),t(a,k),t(k,Y),t(a,K),t(a,T),t(T,M),t(a,z),t(a,x),t(x,J),t(a,Q),t(a,_),t(_,W),A(i,F,y),A(i,f,y),t(f,g),t(g,B),t(g,X),t(g,R),t(R,Z),t(f,$),t(f,u),t(u,D),t(D,V),t(V,tt),t(u,et),t(u,m),t(m,v),t(v,b),t(v,nt),t(v,I),t(I,rt),t(m,st),t(m,S),t(S,N),t(u,lt),t(u,j),t(j,it),A(i,U,y),A(i,L,y),t(L,w),t(w,at)},p:ot,i:ot,o:ot,d(i){i&&n(h),i&&n(F),i&&n(f),i&&n(U),i&&n(L)}}}class Tt extends It{constructor(h){super(),Lt(this,h,null,Ct,wt,{})}}export{Tt as default};
