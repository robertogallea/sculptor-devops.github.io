(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{352:function(t,s,a){"use strict";a.r(s);var e=a(43),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"installer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installer"}},[t._v("#")]),t._v(" Installer")]),t._v(" "),a("p",[t._v("The installer is not meant to be used for Sculptor only, you can customize and skip certaint steps.")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#available-stages"}},[t._v("Available stages")])]),a("li",[a("a",{attrs:{href:"#run-only-one-stage"}},[t._v("Run only one stage")])]),a("li",[a("a",{attrs:{href:"#customized-stages"}},[t._v("Customized stages")])]),a("li",[a("a",{attrs:{href:"#summary"}},[t._v("Summary")])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"available-stages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#available-stages"}},[t._v("#")]),t._v(" Available stages")]),t._v(" "),a("p",[t._v("This will show all stages available.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("./installer list-stages\n\nRunning on OS Version "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18.04")]),t._v("\nYou can see detailed log "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" /root/installer.log\nEvery step can take several minutes\n+------+----------------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Step "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Name           "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n+------+----------------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Credentials    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Superuser      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Motd           "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Ntp            "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Php Cgi        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Base Packages  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" SSH Daemon     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" NodeJs         "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Nginx          "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" MySql Server   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Redis Server   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Let's Encrypt  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Composer       "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Deployer       "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Firewall       "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Crontab        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Check services "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Agent          "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n+------+----------------+\n")])])]),a("h2",{attrs:{id:"run-only-one-stage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-only-one-stage"}},[t._v("#")]),t._v(" Run only one stage")]),t._v(" "),a("p",[t._v("You can specify a signle step to be run directly from the command line, you need only to specify wich step. Remember to quote the step that is as you can see in the list stages and is case isensitive.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("./installer run-stage --step"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"credentials"')]),t._v("\n\nRunning on OS Version "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18.04")]),t._v("\nYou can see detailed log "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" /root/installer.log\nEvery step can take several minutes\nRunning credentials: ✔\nRun "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("time")]),t._v(" taken 00:00:00\n+-------------------+------------------------------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" name              "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" value                        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n+-------------------+------------------------------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Public IP         "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("AN IP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("                      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Password          "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("A PASSWORD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("                 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Database Password "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("A DB PASSWORD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("              "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n+-------------------+------------------------------+\n")])])]),a("h2",{attrs:{id:"customized-stages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#customized-stages"}},[t._v("#")]),t._v(" Customized stages")]),t._v(" "),a("p",[t._v("You can create a custom stage list creating a yml with the desidered stages. For example if you want to install a Nginx/Mysql machine you can delete the agent installation.")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("All steps need to be run after credential steps that prepare the env, do not remove. The MySql step cannot be run twice if already installed, you need to purge installation and content.")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("./installer config\nWriting customizable /root/sculptor/installer.yml\n")])])]),a("p",[t._v("Here the example file.")]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("stages")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" Credentials "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Mandatory do not remove")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" SuUser\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" Motd\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" Ntp\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" Php\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" Packages\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" Sshd\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" NodeJs\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" Nginx\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" MySql\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" Redis\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" LetsSEncrypt\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" Composer\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" Deployer\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" Firewall\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" Crontab\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" CheckServices\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" Agent\n")])])]),a("p",[t._v("You can additionally dump configuration stubs also, so you cand specify certain options forn nginx or other services; all date will be put in custom_templates folder.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("./installer config --templates \nCustomized configuration already exists /root/sculptor/installer.yml\nWriting template /root/sculptor/custom_templates/agent-deploy.php\nWriting template /root/sculptor/custom_templates/agent-env\nWriting template /root/sculptor/custom_templates/env\nWriting template /root/sculptor/custom_templates/file2ban.conf\nWriting template /root/sculptor/custom_templates/index.html\nWriting template /root/sculptor/custom_templates/motd\nWriting template /root/sculptor/custom_templates/nginx.conf\nWriting template /root/sculptor/custom_templates/ntp.conf\nWriting template /root/sculptor/custom_templates/panel.crontab\nWriting template /root/sculptor/custom_templates/php-pool.conf\nWriting template /root/sculptor/custom_templates/php.ini\nWriting template /root/sculptor/custom_templates/sshd.conf\nWriting template /root/sculptor/custom_templates/sudoer.conf\nWriting template /root/sculptor/custom_templates/system.scupltor.conf\n")])])]),a("p",[t._v("Note: if one ore more files are already present will not be overweitter.")]),t._v(" "),a("h2",{attrs:{id:"summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[t._v("#")]),t._v(" Summary")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Command")]),t._v(" "),a("th",[t._v("Parameter")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("list-stages")]),t._v(" "),a("td",[t._v("None")]),t._v(" "),a("td",[t._v("List all stages")])]),t._v(" "),a("tr",[a("td",[t._v("run")]),t._v(" "),a("td",[t._v("None")]),t._v(" "),a("td",[t._v("Start a new installation")])]),t._v(" "),a("tr",[a("td",[t._v("run-stage")]),t._v(" "),a("td",[t._v('--step="STEP NAME"')]),t._v(" "),a("td",[t._v("Run a single step, see list for names")])]),t._v(" "),a("tr",[a("td",[t._v("config")]),t._v(" "),a("td",[t._v("--templates")]),t._v(" "),a("td",[t._v("Create a customizable installation.yml, with --templates will create a folder with all templates that can be customized.")])])])])])}),[],!1,null,null,null);s.default=r.exports}}]);