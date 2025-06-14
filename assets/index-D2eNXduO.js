(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".hamburger"),n=document.querySelector(".nav-menu"),s=document.querySelectorAll(".nav-link");e.addEventListener("click",function(){e.classList.toggle("active"),n.classList.toggle("active")}),s.forEach(t=>{t.addEventListener("click",function(){e.classList.remove("active"),n.classList.remove("active")})}),document.addEventListener("click",function(t){!e.contains(t.target)&&!n.contains(t.target)&&(e.classList.remove("active"),n.classList.remove("active"))})});document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(n){n.preventDefault();const s=document.querySelector(this.getAttribute("href"));if(s){const r=s.offsetTop-80;window.scrollTo({top:r,behavior:"smooth"})}})});window.addEventListener("scroll",function(){const e=document.querySelector(".navbar");window.scrollY>50?(e.style.background="rgba(255, 255, 255, 0.98)",e.style.boxShadow="0 2px 20px rgba(0, 0, 0, 0.1)"):(e.style.background="rgba(255, 255, 255, 0.95)",e.style.boxShadow="none")});const S={threshold:.1,rootMargin:"0px 0px -50px 0px"},q=new IntersectionObserver(function(e){e.forEach(n=>{n.isIntersecting&&n.target.classList.add("fade-in-up")})},S);document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".feature-card, .benefit-item, .step, .stat-item, .section-header").forEach(n=>{q.observe(n)})});function u(e,n,s,t){let o=null;const r=a=>{o||(o=a);const d=Math.min((a-o)/t,1),c=Math.floor(d*(s-n)+n);e.textContent.includes("%")?e.textContent=c+"%":e.textContent.includes("+")?e.textContent=c+"+":e.textContent.includes("/")?e.textContent=(c/10).toFixed(1)+"/5":e.textContent=c+"+",d<1&&window.requestAnimationFrame(r)};window.requestAnimationFrame(r)}const v=new IntersectionObserver(function(e){e.forEach(n=>{n.isIntersecting&&(n.target.querySelectorAll(".stat-number").forEach(t=>{const o=t.textContent;o.includes("%")?u(t,0,95,2e3):o.includes("+")?o.includes("30")?u(t,0,30,2e3):o.includes("500")&&u(t,0,500,2e3):o.includes("/")&&u(t,0,48,2e3)}),v.unobserve(n.target))})},{threshold:.5});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".about-stats");e&&v.observe(e)});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".contact-form");e&&e.addEventListener("submit",function(n){n.preventDefault();const s=new FormData(e);Object.fromEntries(s);const t=e.querySelector('button[type="submit"]'),o=t.textContent;t.textContent="Enviando...",t.disabled=!0,setTimeout(()=>{e.reset(),f("Mensagem enviada com sucesso! Entraremos em contato em breve.","success"),t.textContent=o,t.disabled=!1},1500)})});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll(".btn-primary"),n=document.querySelectorAll(".btn-secondary");e.forEach(s=>{s.textContent.includes("Começar")&&s.addEventListener("click",function(){f("Em breve! A plataforma estará disponível para cadastro.","info")})}),n.forEach(s=>{(s.textContent.includes("Demonstração")||s.textContent.includes("Demo"))&&s.addEventListener("click",function(){const t=document.querySelector("#demo");if(t){const a=t.offsetTop-80;window.scrollTo({top:a,behavior:"smooth"})}})})});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll(".option-btn"),n=document.querySelector(".demo-next"),s=document.querySelector(".demo-reset"),t=document.getElementById("demo-feedback");let o=null;const r={A:{type:"good",icon:"✅",title:"Boa Escolha!",text:"Entrevistar líderes é uma excelente forma de entender a dinâmica atual da organização e identificar pontos de melhoria.",concept:"Diagnóstico Organizacional - A coleta de informações qualitativas através de entrevistas é fundamental para compreender a cultura e os processos organizacionais.",points:25},B:{type:"excellent",icon:"🎯",title:"Excelente Escolha!",text:"Analisar a estrutura atual é o primeiro passo essencial para qualquer processo de reestruturação organizacional.",concept:"Análise Estrutural - Compreender o organograma e fluxos de trabalho permite identificar gargalos, redundâncias e oportunidades de otimização.",points:30},C:{type:"poor",icon:"⚠️",title:"Cuidado!",text:"Propor mudanças sem análise prévia pode gerar resistência e não resolver os problemas reais da organização.",concept:"Gestão da Mudança - Mudanças organizacionais devem ser precedidas de diagnóstico detalhado e planejamento estratégico.",points:5},D:{type:"good",icon:"📊",title:"Boa Abordagem!",text:"Pesquisas de clima são importantes, mas geralmente são mais eficazes após uma análise estrutural inicial.",concept:"Clima Organizacional - A percepção dos funcionários é crucial, mas deve ser contextualizada com dados estruturais.",points:20}};e.forEach(c=>{c.addEventListener("click",function(){e.forEach(i=>i.classList.remove("selected")),this.classList.add("selected"),o=this.dataset.option,n.disabled=!1})}),n.addEventListener("click",function(){o&&a(o)}),s.addEventListener("click",function(){d()});function a(c){const i=r[c],l=t.querySelector(".feedback-icon"),g=t.querySelector(".feedback-header h4"),y=t.querySelector(".feedback-text"),b=t.querySelector(".concept-text"),x=t.querySelector(".points-earned");l.textContent=i.icon,g.textContent=i.title,y.textContent=i.text,b.textContent=i.concept,x.textContent=`+${i.points} XP`,t.className="demo-feedback",i.type==="excellent"?(t.style.background="var(--success-50)",t.style.borderColor="var(--success-200)"):i.type==="good"?(t.style.background="var(--primary-50)",t.style.borderColor="var(--primary-200)"):i.type==="poor"&&(t.style.background="var(--warning-50)",t.style.borderColor="var(--warning-200)"),t.style.display="block";const m=document.querySelector(".progress-fill"),h=parseInt(m.style.width)||65,E=Math.min(h+i.points/10,100);m.style.width=E+"%";const p=document.querySelector(".progress-item span:last-child"),L=(parseInt(p.textContent.split(" / ")[0])||1250)+i.points;p.textContent=`${L} / 2,000`,e.forEach(C=>C.disabled=!0),n.disabled=!0,n.textContent="Cenário Concluído ✓"}function d(){e.forEach(l=>{l.classList.remove("selected"),l.disabled=!1}),n.disabled=!0,n.textContent="Próximo Passo →",t.style.display="none";const c=document.querySelector(".progress-fill");c.style.width="65%";const i=document.querySelector(".progress-item span:last-child");i.textContent="1,250 / 2,000",o=null,f("Demo reiniciada! Tente uma abordagem diferente.","info")}});function f(e,n="info"){document.querySelectorAll(".notification").forEach(r=>r.remove());const t=document.createElement("div");t.className=`notification notification-${n}`,t.innerHTML=`
        <div class="notification-content">
            <span class="notification-icon">${w(n)}</span>
            <span class="notification-message">${e}</span>
            <button class="notification-close">&times;</button>
        </div>
    `,t.style.cssText=`
        position: fixed;
        top: 90px;
        right: 20px;
        background: white;
        padding: 16px 20px;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        border-left: 4px solid ${O(n)};
        z-index: 10000;
        max-width: 400px;
        transform: translateX(100%);
        transition: transform 0.3s ease-in-out;
    `,document.body.appendChild(t),setTimeout(()=>{t.style.transform="translateX(0)"},10),t.querySelector(".notification-close").addEventListener("click",()=>{t.style.transform="translateX(100%)",setTimeout(()=>t.remove(),300)}),setTimeout(()=>{document.body.contains(t)&&(t.style.transform="translateX(100%)",setTimeout(()=>t.remove(),300))},5e3)}function w(e){switch(e){case"success":return"✓";case"warning":return"⚠";case"error":return"✗";default:return"ℹ"}}function O(e){switch(e){case"success":return"#22c55e";case"warning":return"#f59e0b";case"error":return"#ef4444";default:return"#3b82f6"}}const k=`
    .notification-content {
        display: flex;
        align-items: center;
        gap: 12px;
    }
    
    .notification-icon {
        font-weight: bold;
        font-size: 16px;
    }
    
    .notification-message {
        flex: 1;
        font-size: 14px;
        color: #374151;
    }
    
    .notification-close {
        background: none;
        border: none;
        font-size: 18px;
        cursor: pointer;
        color: #6b7280;
        padding: 0;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .notification-close:hover {
        color: #374151;
    }
`;document.addEventListener("DOMContentLoaded",function(){const e=document.createElement("style");e.textContent=k,document.head.appendChild(e)});document.addEventListener("scroll",function(){const e=window.pageYOffset;document.querySelectorAll(".floating-card").forEach((s,t)=>{const o=.5+t*.1,r=-(e*o);s.style.transform=`translateY(${r}px)`})});document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".feature-card, .benefit-item").forEach(n=>{n.addEventListener("mouseenter",function(){this.style.transform="translateY(-8px) scale(1.02)"}),n.addEventListener("mouseleave",function(){this.style.transform="translateY(0) scale(1)"})})});document.addEventListener("keydown",function(e){if(e.key==="Escape"){const n=document.querySelector(".hamburger"),s=document.querySelector(".nav-menu");n.classList.contains("active")&&(n.classList.remove("active"),s.classList.remove("active")),document.querySelectorAll(".notification").forEach(o=>{o.style.transform="translateX(100%)",setTimeout(()=>o.remove(),300)})}});const A=new IntersectionObserver(e=>{e.forEach(n=>{n.isIntersecting&&(n.target.style.animationPlayState="running")})});document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".floating-card").forEach(n=>{n.style.animationPlayState="paused",A.observe(n)})});
