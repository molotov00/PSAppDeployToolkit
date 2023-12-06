"use strict";(self.webpackChunkpsadt_docs=self.webpackChunkpsadt_docs||[]).push([[3545],{8767:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>a});var o=t(1527),r=t(6224);const l={id:"ConvertTo-NTAccountOrSID",title:"ConvertTo-NTAccountOrSID",description:'Help page for the "ConvertTo-NTAccountOrSID" command',keywords:["PSAppDeployToolkit","PowerShell","Help","Documentation"],hide_title:!1,hide_table_of_contents:!1,custom_edit_url:null},c=void 0,i={id:"reference/functions/ConvertTo-NTAccountOrSID",title:"ConvertTo-NTAccountOrSID",description:'Help page for the "ConvertTo-NTAccountOrSID" command',source:"@site/docs/reference/functions/ConvertTo-NTAccountOrSID.mdx",sourceDirName:"reference/functions",slug:"/reference/functions/ConvertTo-NTAccountOrSID",permalink:"/docs/reference/functions/ConvertTo-NTAccountOrSID",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"ConvertTo-NTAccountOrSID",title:"ConvertTo-NTAccountOrSID",description:'Help page for the "ConvertTo-NTAccountOrSID" command',keywords:["PSAppDeployToolkit","PowerShell","Help","Documentation"],hide_title:!1,hide_table_of_contents:!1,custom_edit_url:null},sidebar:"reference",previous:{title:"Convert-RegistryPath",permalink:"/docs/reference/functions/Convert-RegistryPath"},next:{title:"Copy-File",permalink:"/docs/reference/functions/Copy-File"}},s={},a=[{value:"SYNOPSIS",id:"synopsis",level:2},{value:"SYNTAX",id:"syntax",level:2},{value:"NTAccountToSID",id:"ntaccounttosid",level:3},{value:"SIDToNTAccount",id:"sidtontaccount",level:3},{value:"WellKnownName",id:"wellknownname",level:3},{value:"DESCRIPTION",id:"description",level:2},{value:"EXAMPLES",id:"examples",level:2},{value:"EXAMPLE 1",id:"example-1",level:3},{value:"EXAMPLE 2",id:"example-2",level:3},{value:"EXAMPLE 3",id:"example-3",level:3},{value:"PARAMETERS",id:"parameters",level:2},{value:"-AccountName",id:"-accountname",level:3},{value:"-SID",id:"-sid",level:3},{value:"-WellKnownSIDName",id:"-wellknownsidname",level:3},{value:"-WellKnownToNTAccount",id:"-wellknowntontaccount",level:3},{value:"CommonParameters",id:"commonparameters",level:3},{value:"INPUTS",id:"inputs",level:2},{value:"System.String",id:"systemstring",level:3},{value:"Accepts a string containing the NT Account name or SID.",id:"accepts-a-string-containing-the-nt-account-name-or-sid",level:3},{value:"OUTPUTS",id:"outputs",level:2},{value:"System.String",id:"systemstring-1",level:3},{value:"Returns the NT Account name or SID.",id:"returns-the-nt-account-name-or-sid",level:3},{value:"NOTES",id:"notes",level:2},{value:"RELATED LINKS",id:"related-links",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"synopsis",children:"SYNOPSIS"}),"\n",(0,o.jsx)(n.p,{children:"Convert between NT Account names and their security identifiers (SIDs)."}),"\n",(0,o.jsx)(n.h2,{id:"syntax",children:"SYNTAX"}),"\n",(0,o.jsx)(n.h3,{id:"ntaccounttosid",children:"NTAccountToSID"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-powershell",children:"ConvertTo-NTAccountOrSID -AccountName <String> [<CommonParameters>]\n"})}),"\n",(0,o.jsx)(n.h3,{id:"sidtontaccount",children:"SIDToNTAccount"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-powershell",children:"ConvertTo-NTAccountOrSID -SID <String> [<CommonParameters>]\n"})}),"\n",(0,o.jsx)(n.h3,{id:"wellknownname",children:"WellKnownName"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-powershell",children:"ConvertTo-NTAccountOrSID -WellKnownSIDName <String> [-WellKnownToNTAccount] [<CommonParameters>]\n"})}),"\n",(0,o.jsx)(n.h2,{id:"description",children:"DESCRIPTION"}),"\n",(0,o.jsx)(n.p,{children:"Specify either the NT Account name or the SID and get the other.\nCan also convert well known sid types."}),"\n",(0,o.jsx)(n.h2,{id:"examples",children:"EXAMPLES"}),"\n",(0,o.jsx)(n.h3,{id:"example-1",children:"EXAMPLE 1"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-powershell",children:"ConvertTo-NTAccountOrSID -AccountName 'CONTOSO\\User1'\n"})}),"\n",(0,o.jsx)(n.p,{children:"Converts a Windows NT Account name to the corresponding SID"}),"\n",(0,o.jsx)(n.h3,{id:"example-2",children:"EXAMPLE 2"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-powershell",children:"ConvertTo-NTAccountOrSID -SID 'S-1-5-21-1220945662-2111687655-725345543-14012660'\n"})}),"\n",(0,o.jsx)(n.p,{children:"Converts a Windows NT Account SID to the corresponding NT Account Name"}),"\n",(0,o.jsx)(n.h3,{id:"example-3",children:"EXAMPLE 3"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-powershell",children:"ConvertTo-NTAccountOrSID -WellKnownSIDName 'NetworkServiceSid'\n"})}),"\n",(0,o.jsx)(n.p,{children:"Converts a Well Known SID name to a SID"}),"\n",(0,o.jsx)(n.h2,{id:"parameters",children:"PARAMETERS"}),"\n",(0,o.jsx)(n.h3,{id:"-accountname",children:"-AccountName"}),"\n",(0,o.jsx)(n.p,{children:"The Windows NT Account name specified in <domain><username> format.\nUse fully qualified account names (e.g., <domain><username>) instead of isolated names (e.g, <username>) because they are unambiguous and provide better performance."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"Type: String\nParameter Sets: NTAccountToSID\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n"})}),"\n",(0,o.jsx)(n.h3,{id:"-sid",children:"-SID"}),"\n",(0,o.jsx)(n.p,{children:"The Windows NT Account SID."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"Type: String\nParameter Sets: SIDToNTAccount\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n"})}),"\n",(0,o.jsx)(n.h3,{id:"-wellknownsidname",children:"-WellKnownSIDName"}),"\n",(0,o.jsx)(n.p,{children:"Specify the Well Known SID name translate to the actual SID (e.g., LocalServiceSid)."}),"\n",(0,o.jsx)(n.p,{children:"To get all well known SIDs available on system:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-powershell",children:"[[Enum]]::GetNames([[Security.Principal.WellKnownSidType]])\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"Type: String\nParameter Sets: WellKnownName\nAliases:\n\nRequired: True\nPosition: Named\nDefault value: None\nAccept pipeline input: True (ByPropertyName)\nAccept wildcard characters: False\n"})}),"\n",(0,o.jsx)(n.h3,{id:"-wellknowntontaccount",children:"-WellKnownToNTAccount"}),"\n",(0,o.jsx)(n.p,{children:"Convert the Well Known SID to an NTAccount name"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"Type: SwitchParameter\nParameter Sets: WellKnownName\nAliases:\n\nRequired: False\nPosition: Named\nDefault value: False\nAccept pipeline input: False\nAccept wildcard characters: False\n"})}),"\n",(0,o.jsx)(n.h3,{id:"commonparameters",children:"CommonParameters"}),"\n",(0,o.jsxs)(n.p,{children:["This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see ",(0,o.jsx)(n.a,{href:"http://go.microsoft.com/fwlink/?LinkID=113216",children:"about_CommonParameters"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"inputs",children:"INPUTS"}),"\n",(0,o.jsx)(n.h3,{id:"systemstring",children:"System.String"}),"\n",(0,o.jsx)(n.h3,{id:"accepts-a-string-containing-the-nt-account-name-or-sid",children:"Accepts a string containing the NT Account name or SID."}),"\n",(0,o.jsx)(n.h2,{id:"outputs",children:"OUTPUTS"}),"\n",(0,o.jsx)(n.h3,{id:"systemstring-1",children:"System.String"}),"\n",(0,o.jsx)(n.h3,{id:"returns-the-nt-account-name-or-sid",children:"Returns the NT Account name or SID."}),"\n",(0,o.jsx)(n.h2,{id:"notes",children:"NOTES"}),"\n",(0,o.jsx)(n.p,{children:"This is an internal script function and should typically not be called directly."}),"\n",(0,o.jsx)(n.p,{children:"The conversion can return an empty result if the user account does not exist anymore or if translation fails."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"http://blogs.technet.com/b/askds/archive/2011/07/28/troubleshooting-sid-translation-failures-from-the-obvious-to-the-not-so-obvious.aspx",children:"http://blogs.technet.com/b/askds/archive/2011/07/28/troubleshooting-sid-translation-failures-from-the-obvious-to-the-not-so-obvious.aspx"})}),"\n",(0,o.jsx)(n.h2,{id:"related-links",children:"RELATED LINKS"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://psappdeploytoolkit.com",children:"https://psappdeploytoolkit.com"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"http://msdn.microsoft.com/en-us/library/system.security.principal.wellknownsidtype(v=vs.110).aspx",children:"http://msdn.microsoft.com/en-us/library/system.security.principal.wellknownsidtype(v=vs.110).aspx"})})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},6224:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>c});var o=t(959);const r={},l=o.createContext(r);function c(e){const n=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),o.createElement(l.Provider,{value:n},e.children)}}}]);