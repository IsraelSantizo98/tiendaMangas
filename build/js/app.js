const showHiddenInput=(e,t,s)=>{const n=document.getElementById(e),d=document.getElementById(t),o=document.getElementById(s);o.addEventListener("click",()=>{"password"===d.type?(d.type="text",o.classList.add("fa-eye-slash")):(d.type="password",o.classList.remove("fa-eye-slash")),n.classList.toggle("overlay-content")})};showHiddenInput("input-overlay","input-pass","input-icon");
//# sourceMappingURL=app.js.map
