(this["webpackJsonpex-project"]=this["webpackJsonpex-project"]||[]).push([[0],Array(20).concat([function(e,t,a){},,,,function(e,t,a){e.exports=a.p+"static/media/gitpic1.1.ccf2dc83.png"},function(e,t,a){e.exports=a.p+"static/media/conflict-pic.77a27612.png"},function(e,t,a){e.exports=a.p+"static/media/conflict-pic.4f85f967.svg"},function(e,t,a){e.exports=a.p+"static/media/pic3edit.3ae95938.png"},function(e,t,a){e.exports=a.p+"static/media/distributed-pic.2bd97136.png"},function(e,t,a){e.exports=a(48)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(21),l=a.n(i),s=(a(34),a(35),a(9)),o=a(11),c=a(2),m=a(3),d=a(5),u=a(4),p=a(13),g=a(6),h=(a(36),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(d.a)(this,Object(u.a)(t).call(this))).menuScroll=e.menuScroll.bind(Object(p.a)(e)),e.state={scrolled:!1},e}return Object(g.a)(t,e),Object(m.a)(t,[{key:"menuScroll",value:function(){!0!==window.scrollY<100?this.setState({scrolled:!0}):this.setState({scrolled:!1})}},{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.menuScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.menuScroll)}},{key:"render",value:function(){return r.a.createElement("div",{className:this.state.scrolled?"menu scrolled":"menu"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"#start"},"Start")),r.a.createElement("li",null,r.a.createElement("a",{href:"#description-nav"},"Information")),r.a.createElement("li",null,r.a.createElement("a",{href:"#commands-nav"},"Kommandon")),r.a.createElement("li",null,r.a.createElement("a",{href:"#conflicts-nav"},"Konflikter")),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/quiz"},"Quiz"))))}}]),t}(n.Component)),v=(a(42),a(24)),k=a.n(v),f=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(d.a)(this,Object(u.a)(t).call(this))).startScroll=e.startScroll.bind(Object(p.a)(e)),e.state={scrolled:!1},e}return Object(g.a)(t,e),Object(m.a)(t,[{key:"startScroll",value:function(){!0!==window.scrollY<100?this.setState({scrolled:!0}):this.setState({scrolled:!1})}},{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.startScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.startScroll)}},{key:"render",value:function(){return r.a.createElement("div",{className:"start"},r.a.createElement("div",{id:"start"}),r.a.createElement("h3",{className:"git-heading"},"GIT"),r.a.createElement("div",{className:"squares"},r.a.createElement("div",{className:"square1"}),r.a.createElement("div",{className:this.state.scrolled?"square2 fadeOut":"square2 fadeBack"}),r.a.createElement("div",{className:"square3"}),r.a.createElement("div",{className:"square4"}),r.a.createElement("div",{className:"square5"}),r.a.createElement("img",{className:"gitpic1",src:k.a,alt:"gitpic1"}),";"),r.a.createElement("div",{className:"mg-line"},r.a.createElement("h3",null,"M"),r.a.createElement("h3",null,"\xc5"),r.a.createElement("h3",null,"S"),r.a.createElement("h3",null,"T"),r.a.createElement("h3",null,"E"),r.a.createElement("br",null),r.a.createElement("h3",null,"G"),r.a.createElement("h3",null,"I"),r.a.createElement("h3",null,"T"),r.a.createElement("h3",null,"T"),r.a.createElement("h3",null,"A"),r.a.createElement("h3",null,"?")),r.a.createElement("div",{className:"quiz-star-div"},r.a.createElement("p",{className:"quiz-text"},"Vad vet du om Git och Github?",r.a.createElement("br",null),"Ta reda p\xe5 det genom att g\xf6ra v\xe5rt quiz"),r.a.createElement(s.b,{to:"/quiz"},r.a.createElement("button",{className:"quiz-btn"},"Quiz"))))}}]),t}(n.Component),b=(a(20),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(d.a)(this,Object(u.a)(t).call(this))).displayExplanation=function(t,a){(0,e.props.getExp)(t,a)},e.state={commandsDesc:[{id:"1",command:"git add .",exp:"Anv\xe4nds f\xf6r att l\xe4gga till alla dina \xe4ndrade filer och g\xf6r dessa filer redo att f\xf6rbindas(commitas)."},{id:"2",command:'git commit -m "meddelande h\xe4r"',exp:"Anv\xe4nds f\xf6r att f\xf6rbinda dina filer med ett meddelande som g\xf6r det l\xe4ttare att lokalisera och koppla ihop din \xe4ndring med att passande meddelande."},{id:"3",command:"git status",exp:"Status-kommandot visar nuvarande status f\xf6r din working directory. Detta l\xe5ter dig att se vilka f\xf6r\xe4ndringar som har iscensatts samt vilka som inte har det. "},{id:"4",command:'git add "file"',exp:"Anv\xe4nds f\xf6r att l\xe4gga till en specifik fil som defineras inom citationstecken och g\xf6r denna fil redo att commitas"},{id:"5",command:"git push",exp:"Anv\xe4nds f\xf6r att skicka upp med dina \xe4ndringar till ditt fj\xe4rr-repo, som t.ex  Github."},{id:"6",command:"git pull",exp:"Anv\xe4nds f\xf6r att h\xe4mta hem de senaste \xe4ndringarna fr\xe5n ditt fj\xe4rr-repo."},{id:"7",command:"git branch",exp:"Anv\xe4nds f\xf6r att visa alla din tillg\xe4ngliga grenar och markerar den gran som du nuvarande befinner dig i"},{id:"8",command:'git checkout -b "namnet p\xe5 branchen"',exp:"Anv\xe4nds f\xf6r att skapa en lokal gren samt f\xf6rflyttar sig till den grenen."},{id:"9",command:'git checkout "branch-namn"',exp:"Anv\xe4nds d\xe5 man vill f\xf6rflytta sig till den tillg\xe4ngliga grenen med det namnet"},{id:"10",command:'git merge "branch-namn"',exp:"Anv\xe4nds n\xe4r du vill sl\xe5 samman en specifik gren med den gren som du nuvarande befinner dig i."},{id:"11",command:"git branch -a",exp:"Anv\xe4nds f\xf6r att visa lokala grenar samt fj\xe4rr-repot."},{id:"12",command:'git branch -m "nytt-branch-namn"',exp:"Anv\xe4nds f\xf6r att \xe4ndra namnet p\xe5 din nyvarande gren till det som skrivs inom dess citationstecken."},{id:"13",command:'git branch -d "branch-namn"',exp:"Anv\xe4nds f\xf6r att radera den gren som skrivs inom dess citationstecken. F\xf6r att radera din gren, se till att st\xe5 i master grenen"},{id:"14",command:'git push origin :"branch-namn"',exp:"Anv\xe4nds f\xf6r att radera en gren i fj\xe4rr-repot"},{id:"15",command:'git push origin "branch-namn"',exp:"Anv\xe4nds d\xe5 vi vill skicka v\xe5ran gren till fj\xe4rr-repot"},{id:"16",command:'git stash save "stash-namn" && git stash',exp:"Anv\xe4nds f\xf6r att spara undan dina nuvarande \xe4ndringar tillf\xe4lligt. Detta \xe4r bra om du beh\xf6ver byta branch och inte vill f\xf6rlora dina \xe4ndringar."},{id:"17",command:"git stash list",exp:"Anv\xe4nds f\xf6r att lista alla dina \xe4ndringar som du sparat(stashat)."},{id:"18",command:"git stash pop",exp:" Anv\xe4nds d\xe5 du vill \xe5terst\xe4lla dina \xe4ndringar som du har 'stashat'"}]},e}return Object(g.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"wrapper-com2"},r.a.createElement("div",{className:"wrapper-com3"},this.state.commandsDesc.map((function(t,a){return r.a.createElement("button",{className:"com",key:a,onClick:function(){return e.displayExplanation(t.command,t.exp)}},t.command)})))))}}]),t}(n.Component)),E=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(d.a)(this,Object(u.a)(t).call(this))).setExp=function(t,a){e.setState({command:t,content:a})},e.state={content:"L\xe4r dig mer om git-kommandon genom att klicka p\xe5 de olika kommandon nedan"},e}return Object(g.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"commands-nav",className:"wrapper-com1"},r.a.createElement("div",{className:"height-20"}),r.a.createElement("h2",null,"Kommandon"),r.a.createElement("hr",null),r.a.createElement("div",{className:"wrapper-com4"},r.a.createElement("div",null,r.a.createElement("div",{className:"transbox"},r.a.createElement("h3",null,this.state.command),r.a.createElement("p",null,this.state.content)))),r.a.createElement("div",{className:"com-sqr-1"}),r.a.createElement("div",{className:"com-sqr-2"}),r.a.createElement("div",{className:"com-sqr-3"}),r.a.createElement("div",{className:"com-sqr-4"}),r.a.createElement(b,{getExp:this.setExp}))}}]),t}(n.Component),j=(a(43),a(25)),y=a.n(j),N=a(26),w=a.n(N),q=function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"conflicts-nav",className:"conflicts"},r.a.createElement("div",{className:"height-20"}),r.a.createElement("div",{className:"con-sqr-1"}),r.a.createElement("div",{className:"con-sqr-2"}),r.a.createElement("div",{className:"con-sqr-3"}),r.a.createElement("div",{className:"con-sqr-4"}),r.a.createElement("h2",{className:"h2-conflicts"},"Konflikter"),r.a.createElement("div",{className:"wrapper-con1"},r.a.createElement("div",{className:"wrapper-con2"},r.a.createElement("h4",{className:"large"},"Git merge"),r.a.createElement("p",null,"Sammans\xe4ttning (merge) och konflikter \xe4r en vanlig del av arbetet n\xe4r man anv\xe4nder sig av git, d\xe4rf\xf6r \xe4r det bra att veta lite om hur det funkar och varf\xf6r det kan uppst\xe5. Git g\xf6r sammanslagningen av ditt projekt superl\xe4tt och f\xf6r det mesta kommer git att f\xf6rst\xe5 hur man automatiskt integrerar nya f\xf6r\xe4ndringar."),r.a.createElement("h4",{className:"large"},"Tv\xe5 typer av merge konflikter"),r.a.createElement("p",null,"Merge konflikter i git uppst\xe5r till exempel n\xe4r tv\xe5 personer har gjort \xe4ndringar i samma fil eller n\xe4r en utvecklare raderar en fil medan en annan utvecklare arbetar i den. I dessa fall kan git inte automatiskt best\xe4mma vad som \xe4r korrekt och ber d\xe5 den som genomf\xf6r sammanslagningen (mergen) att fixa konflikterna innan denne skickar upp \xe4ndringarna till fj\xe4rr-repot (master branchen)."),r.a.createElement("p",null,"En annan merge konflikt kan ocks\xe5 uppst\xe5 n\xe4r git ser att det finns f\xf6r\xe4ndringar i projektmappen (repository) eller i sj\xe4lva milj\xf6n n\xe4r du iscens\xe4tter (git add) det aktuella projektet. Sammanslagningen misslyckas f\xf6r att det finns v\xe4ntade \xe4ndringar (pending changes) som kan skrivas \xf6ver av att du spara din \xe4ndringar med \u2018git commit\u2019. Detta h\xe4nder f\xf6r att du d\xe5 har konflikter med dina p\xe5g\xe5ende lokala f\xf6r\xe4ndringar (pending local changes) och inte med en annan utvecklare och dennes kod. Den konflikt som skapats av de lokala tillst\xe5ndet m\xe5ste d\xe4rav stabiliseras med antingen git reset, git stash, git checkout eller git commit."),r.a.createElement("img",{className:"conflictPic2",src:w.a,alt:"conflictPic2"})),r.a.createElement("div",{className:"wrapper-con3"},r.a.createElement("h4",{className:"large"},"L\xf6sningar"),r.a.createElement("p",null,"Sitter du i din terminal d\xe5 du genomf\xf6r sammanslagningen(merge) s\xe5 kommer git att markera filen med r\xf6tt och stoppa sammanslagningsprocessen. Klickar man p\xe5 filen s\xe5 ser man rader som \xe4r antingen"," ",r.a.createElement("span",{style:{color:"rgba(47, 98, 141)"}},"bl\xe5")," eller"," ",r.a.createElement("span",{style:{color:"rgba(53, 115, 102)"}},"gr\xf6n")," ","markerade. Gr\xf6nt betyder att detta \xe4r de som f\xf6r tillf\xe4llet finns i filen, i master branchen"," ",r.a.createElement("span",{style:{color:"rgba(53, 115, 102)"}},"(current change)")," ","och det bl\xe5a"," ",r.a.createElement("span",{style:{color:"rgba(47, 98, 141)"}},"(incoming change)")," ","\xe4r det du suttit med i din utvecklings branch och vill skicka upp till master branchen."),r.a.createElement("img",{className:"conflictPic",src:y.a,alt:"conflictPic"}),r.a.createElement("p",null,'Vid tillkomst av en konflikt kommer git att hj\xe4lpa dig v\xe4lja mellan olika alternativ. Dessa alternativ \xe4r "Accept Current Change", "Accept Incoming Change", "Accept Both Changes" och "Compare Changes".'),r.a.createElement("p",null,"Man kan ocks\xe5 l\xf6sa konflikterna via exempelvis GitHub genom att skapa en s\xe5 kallad Pull request. Precis som tidigare s\xe5 k\xe4nner git av konflikterna och stoppar sammanslagningsprocessen. D\xe5 f\xe5r man g\xe5 in och se vad som \xe4r markerat som din branch\xe4ndring och vad som finns i master branchen. Generellt s\xe4tt s\xe5 \xe4r det l\xe4ttare som nyb\xf6rjare att l\xf6sa konflikterna i terminalen d\xe5 den tydligare markerar vad som \xe4r dina \xe4ndringar och vad som redan existerar i filen sen innan."))))}}]),t}(n.Component),x=(a(44),a(27)),O=a.n(x),A=a(28),C=a.n(A),G=function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"description-nav",className:"description"},r.a.createElement("div",{className:"height-20"}),r.a.createElement("h2",null,"Vad \xe4r git?"),r.a.createElement("div",{className:"display-flex"},r.a.createElement("p",null,"Git \xe4r ett distribuerat versionshanteringssystem som skapades 2005 av Linus Torvald, som \xe4ven har skapat operativsystemet Linux. Med git s\xe5 kan utvecklare ladda upp och granska k\xe4llkod och det finns inget centralt arkiv utan vem som helst kan skapa en egen kopia av ett repository. ",r.a.createElement("br",null),"Git hj\xe4lper oss att sp\xe5ra olika versioner av v\xe5ra dokument, att h\xe5lla historik \xf6ver \xe4ndringar i dokumenten samt att uppmuntra att arbeta i team.")),r.a.createElement("img",{className:"pic3",src:O.a,alt:"pic3"}),r.a.createElement("h2",null,"Varf\xf6r git?"),r.a.createElement("p",null,"F\xf6rdelarna med att ha ett distribuerade system \xe4r att alla som anv\xe4nder sig av detta har en helt komplett version av projektets historia vilket minskar chanserna avsev\xe4rt att n\xe5got skulle f\xf6rsvinna. P\xe5 s\xe5 s\xe4tt kan tidigare versioner av k\xe4llkod, dokument eller webbsidor \xe5terskapas och de tidigare \xe4ndringar kan sp\xe5ras. Det som g\xf6r git s\xe5 bra \xe4r ocks\xe5 det parallella arbete d\xe4r man t.ex. kan sp\xe5ra och r\xe4tta de tidigare versionerna samtidigt som man kan vidareutveckla nya versioner. Detta blir v\xe4ldigt anv\xe4ndbart n\xe4r man sitter i stora team och jobbar p\xe5 samma saker."),r.a.createElement("h2",null,"Vad \xe4r ett repository?"),r.a.createElement("p",null,"Ett Git Repository (repo) \xe4r en samling filer som h\xf6r ihop, vanligen ett projekt. Ett repository skapar du varje g\xe5ng du b\xf6rjar med ett nytt projekt och du kan sedan enkelt skifta mellan olika repository n\xe4r du hoppar mellan projekt. Ett repo existerar p\xe5 din h\xe5rddisk och du g\xf6r \xe4ndringarna i ditt lokala repo p\xe5 datan och skickar sedan upp dessa till fj\xe4rr-repot (master branchen)."),r.a.createElement("img",{className:"pic1",src:C.a,alt:"pic1"}))}}]),t}(n.Component),S=[{id:1,question:'Vad inneb\xe4r git-kommandot "git add ."?',options:["Man commitar alla sina filer","Man l\xe4gger till en specifik fil och g\xf6r denna fil redo att commitas","Man l\xe4gger till alla sina \xe4ndrade filer och g\xf6r dessa filer redo att commitas."],answer:"Man l\xe4gger till alla sina \xe4ndrade filer och g\xf6r dessa filer redo att commitas."},{id:2,question:"Vem \xe4r skaparen bakom Git?",options:["Ryan Dahl","Linus Torvald","Jacob Thornton"],answer:"Linus Torvald"},{id:3,question:"Vilket kommando anv\xe4nds f\xf6r att byta gren?",options:['git checkout -b "branch-namn"','git checkout "branch-namn"','git branch -m "branch-namn"'],answer:'git checkout "branch-namn"'},{id:4,question:"N\xe4r skapades Git?",options:["2001","2005","2007"],answer:"2005"},{id:5,question:"Vad \xe4r det engelska ordet som anv\xe4nds n\xe4r man pratar om sammanslagning inom git?",options:["merge","stash","repo"],answer:"merge"},{id:6,question:"Vilka av f\xf6ljande f\xf6retag har inte anv\xe4nt sig av GIT?",options:["Netflix","LinkedIn","A\u0161anja"],answer:"A\u0161anja"},{id:7,question:"Vad skriver du n\xe4r du vill h\xe4mta alla \xe4ndringar som gjorts i huvud repositoryn?",options:['git get "repo namn"',"git pull",'git pull "repo namn"'],answer:"git pull"},{id:8,question:"Vilket av f\xf6ljande \xe4r inte en webbbaserad lagringstj\xe4nst f\xf6r kodprojekt?",options:["Bitbucket","Netlify","Gitlab"],answer:"Netlify"},{id:9,question:"D\xe5 det uppst\xe5r en konflikt till f\xf6lja av en sammanslagning(merge) kommer du efterfr\xe5gas att v\xe4lja mellan olika alternativ. Vilket av f\xf6ljande \xe4r inte ett?",options:["Accept No Changes","Accept Current Change","Accept Both Changes"],answer:"Accept No Changes"},{id:10,question:"Vad skriver man f\xf6r att skapa en nya branch (gren)?",options:['git branch "branch namn"','git branch -b "branch namn"','git branchname "branch namn"'],answer:'git branch "branch namn"'},{id:11,question:"Hur g\xf6r du f\xf6r att kopiera ett annat repository?",options:['git copy "repo namn"','git copy "url f\xf6r repo"','git clone "url f\xf6r repo"'],answer:'git clone "url f\xf6r repo"'},{id:12,question:"Vilket \xe5r grundades GitLab?",options:["2011","2009","2008"],answer:"2011"},{id:13,question:"Vad g\xf6r github pages?",options:["Lanserar ditt repository","En info sida om github","Kommentars sida d\xe4r man kan skriva om github"],answer:"Lanserar ditt repository"}],z=(a(45),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={userAnswer:null,currentQuestion:0,options:[],score:0,disabled:!0},a.loadQuiz=function(){var e=a.state.currentQuestion;a.setState((function(){return{questions:S[e].question,options:S[e].options,answers:S[e].answer,quizEnd:!1}}))},a.nextQuestionHandler=function(){var e=a.state,t=e.userAnswer,n=e.answers,r=e.score;a.setState({currentQuestion:a.state.currentQuestion+1}),t===n&&a.setState({score:r+1})},a.checkAnswer=function(e){a.setState({userAnswer:e,disabled:!1})},a.finishHandler=function(){var e=a.state,t=e.userAnswer,n=e.answers,r=e.score;a.state.currentQuestion===S.length-1&&a.setState({quizEnd:!0,score:t===n?r+1:r})},a.renderBackButton=function(){return r.a.createElement(s.b,{to:"/how-to-git/"},r.a.createElement("button",{className:"quiz-button"},"Tillbaka till start"))},a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.loadQuiz()}},{key:"componentDidUpdate",value:function(e,t){var a=this.state.currentQuestion;this.state.currentQuestion!==t.currentQuestion&&this.setState((function(){return{disabled:!0,questions:S[a].question,options:S[a].options,answers:S[a].answer}}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.questions,n=t.options,i=t.currentQuestion,l=t.userAnswer;return t.quizEnd?r.a.createElement("div",{className:"quiz-container"},this.renderBackButton(),r.a.createElement("div",{className:"quiz-box"},r.a.createElement("h2",null,"Game Over"),r.a.createElement("p",null,"Final score: ",this.state.score," / ",S.length," po\xe4ng"),r.a.createElement("p",null,"R\xe4tt svar p\xe5 fr\xe5gorna var:"),r.a.createElement("ul",{className:"right-answers"},S.map((function(e,t){return r.a.createElement("li",{className:"right-options",key:t},e.id,". \xa0",e.answer)}))))):r.a.createElement("div",{className:"quiz-container"},this.renderBackButton(),r.a.createElement("div",{className:"quiz-box"},r.a.createElement("div",{className:"quiz-form",id:"quiz"},r.a.createElement("h4",null,a),r.a.createElement("br",null),r.a.createElement("span",null,"Fr\xe5ga ".concat(i+1," av ").concat(S.length)),n.map((function(t,a){return r.a.createElement("p",{key:a,className:"alternative\n            ".concat(l===t?"selected":null,"\n            "),onClick:function(){return e.checkAnswer(t)}},t)})),i<S.length-1&&r.a.createElement("button",{disabled:this.state.disabled,onClick:this.nextQuestionHandler,className:"quiz-button"},"N\xe4sta"),i===S.length-1&&r.a.createElement("button",{className:"quiz-button",onClick:this.finishHandler},"R\xe4kna Ihop"),r.a.createElement("p",null))))}}]),t}(n.Component)),D=(a(46),function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"webHosting-container"},r.a.createElement("h2",null,"Webbhotell"),r.a.createElement("p",null,"I anv\xe4ndningen av git \xe4r det vanligt att man anv\xe4nder sig av s\xe5 kallade webbhotell f\xf6r att lagra sin kod. Genom att skapa ett repository p\xe5 ett webbhotell kan du lagra dina projekt internt eller publik och med hj\xe4lp av att anv\xe4nda git, skapa ett arbetsfl\xf6de d\xe4r du tillsammans med andra eller med dig sj\xe4lv, vidareutvecklar ditt projekt. Detta ger \xe4ven m\xf6jlighet att ladda ner en fullst\xe4ndig kopia av ett projekt lokalt p\xe5 sin dator. Vilken som helst av dessa kopior skulle i praktiken kunna skickas upp f\xf6r att ers\xe4tta huvud serverns repository i h\xe4ndelse av en krasch p\xe5 den lokala datorn s\xe5 har man alltid m\xf6jlighet att ladda ner den senaste koden fr\xe5n ditt webbhotell igen - detta s\xe4kerst\xe4ller att en crash inte resulterar i f\xf6rlorat arbete. Vi kommer att fokusera p\xe5 de 2 vanligaste webbhotellen, Github och Gitlab."),r.a.createElement("div",{className:"hosings-div"},r.a.createElement("div",{className:"github"},r.a.createElement("h2",null,"Github"),r.a.createElement("p",null,"Github utvecklades av Tom Preston-Werner, Chris Wanstrath och PJ Hyett 2008 med hj\xe4lp av ramverket Ruby on Rails men \xe4r fr\xe5n och med 2018 ett dotterbolag till Microsoft. Github \xe4r en v\xe4rdtj\xe4nst d\xe4r du kan f\xf6rvalta och utveckla din k\xe4llkod och du kan skapa gratiskonton s\xe5v\xe4l som betalkonton f\xf6r privat bruk med obegr\xe4nsat antal repositorys."),r.a.createElement("p",null,"Github erbjuder all den funktionalitet som du f\xe5r med de distribuerade versionshanteringssystemet och k\xe4llkodhanteringsfunktionen (SCM), samt egna funktioner s\xe5som t.ex. github pages. Github pages \xe4r utformad f\xf6r att vara v\xe4rd f\xf6r ditt repository (projektmapp) och p\xe5 s\xe5 s\xe4tt kan du via en url l\xe4nk, som best\xe5r av ditt namn och ditt repository namn, lansera ditt projekt.")),r.a.createElement("div",{className:"gitlab"},r.a.createElement("h2",null,"Gitlab"),r.a.createElement("p",null,"GitLab \xe4r ett ukrainskt f\xf6retag skapat av Dmitriy Zaporozhets och Valery Sizov och grundades 2011 som ett alternativ till GitHub. Gitlab \xe4r skrivet i Ruby och Go och har \xf6ppen k\xe4llkod.",r.a.createElement("br",null),"GitLab fungerar som en vanligt webbhotell, d\xe4ribland anv\xe4ndningen av git-repository som hj\xe4lper till att lagra projekt, men med till\xe4gget att de till\xe4mpar s\xe5 kallade Continuous Integration(CI). CI anv\xe4nds f\xf6r att interagera kod som f\xf6rses av ett team med en gemensam repository. Utvecklare delar den nya koden i en merge(pull) request. Denna f\xf6rfr\xe5gan triggar en s\xe5 kallad pipeline att bygga, validera och testa den nya koden innan man f\xf6renar \xe4ndringarna i sitt repository. Detta ger allts\xe5 en snabb leverans av feedback till utvecklare samt testning av kvaliteten. Sammarbetet med Continuous Delivery (CD) s\xe4kerst\xe4ller h\xe4mtningen av CI-validerad kod till applikationen med hj\xe4lp av strukturerad distributions pipelines. Tillsammans hj\xe4lper CI och CD ditt team att p\xe5skynda ett resultat att leverera till kunderna. CI finns d\xe4r f\xf6r att hj\xe4lpa till att f\xe5nga upp minsta bugg tidigt i utvecklingen och CD hj\xe4lper till att flytta verifierad kod till applikationen snabbare."),r.a.createElement("div",{className:"web-boxes"},r.a.createElement("div",{className:"web-sqr-1"}),r.a.createElement("div",{className:"web-sqr-2"}),r.a.createElement("div",{className:"web-sqr-3"}),r.a.createElement("div",{className:"web-sqr-4"})))))}}]),t}(n.Component)),V=(a(47),function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement("div",{id:"menuToggle"},r.a.createElement("input",{type:"checkbox"}),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("ul",{id:"menu"},r.a.createElement("a",{href:"#start"},r.a.createElement("li",null,"Start")),r.a.createElement("a",{href:"#description-nav"},r.a.createElement("li",null,"Information")),r.a.createElement("a",{href:"#commands-nav"},r.a.createElement("li",null,"Kommandon")),r.a.createElement("a",{href:"#conflicts-nav"},r.a.createElement("li",null,"Konflikter")),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/quiz"},"Quiz"))))))}}]),t}(n.Component));var I=function(){return r.a.createElement(s.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/quiz"},r.a.createElement(z,null)),r.a.createElement(o.a,{path:"/"},r.a.createElement(h,null),r.a.createElement(V,null),r.a.createElement(f,null),r.a.createElement(G,null),r.a.createElement(D,null),r.a.createElement(E,null),r.a.createElement(q,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}]),[[29,1,2]]]);
//# sourceMappingURL=main.4cabe6da.chunk.js.map