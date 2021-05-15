# A-O_InViewDOMLoader
> [![njsscan sarif](https://github.com/MyUserNameIsMyUserName/A-O_InViewDOMLoader/actions/workflows/njsscan-analysis.yml/badge.svg)](https://github.com/MyUserNameIsMyUserName/A-O_InViewDOMLoader/actions/workflows/njsscan-analysis.yml) [![ShiftLeft](https://github.com/MyUserNameIsMyUserName/A-O_InViewDOMLoader/actions/workflows/shiftleft.yml/badge.svg)](https://github.com/MyUserNameIsMyUserName/A-O_InViewDOMLoader/actions/workflows/shiftleft.yml) [![Codacy Security Scan](https://github.com/MyUserNameIsMyUserName/A-O_InViewDOMLoader/actions/workflows/codacy-analysis.yml/badge.svg)](https://github.com/MyUserNameIsMyUserName/A-O_InViewDOMLoader/actions/workflows/codacy-analysis.yml) [![CodeQL](https://github.com/MyUserNameIsMyUserName/A-O_InViewDOMLoader/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/MyUserNameIsMyUserName/A-O_InViewDOMLoader/actions/workflows/codeql-analysis.yml) [![SL Scan](https://github.com/MyUserNameIsMyUserName/A-O_InViewDOMLoader/actions/workflows/shiftleft-analysis.yml/badge.svg)](https://github.com/MyUserNameIsMyUserName/A-O_InViewDOMLoader/actions/workflows/shiftleft-analysis.yml) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/1d593c5336924700b0b7d82d0c291c08)](https://app.codacy.com/gh/MyUserNameIsMyUserName/A-O_InViewDOMLoader?utm_source=github.com&utm_medium=referral&utm_content=MyUserNameIsMyUserName/A-O_InViewDOMLoader&utm_campaign=Badge_Grade_Settings) [![OSSAR](https://github.com/MyUserNameIsMyUserName/A-O_InViewDOMLoader/actions/workflows/ossar-analysis.yml/badge.svg)](https://github.com/MyUserNameIsMyUserName/A-O_InViewDOMLoader/actions/workflows/ossar-analysis.yml)




Way to load stuff in modern web.




#
## Development >>
       
This section provides more inside view on developer process, available thing to run, utilize, test... Warm welcome to anyone willing to join in and help get this weirdess to next level.   
  

## Resources & Tools:


>## [-> Autorebuild front on change for faster work results :    
> Here we can also find ourselves using different approaches cuz it's still gonna be triggered through the bash so no point in forcing which app will do detection for change and triggering rebuild.     

  1. **NODEMON**    
    Website: https://nodemon.io/   
    NPM:     https://www.npmjs.com/package/nodemon    
    GitHub:  https://github.com/remy/nodemon     
    Super easy to use for this purpose, start a server to serve files...and just work...let it rebuild while you edit so you can see it in website soon as possible (without need to interact/trigger build).
# 
>## [-> tunneling - Exposing you localhost to public through tunnel
>   We can use different ways tools to provide this functionality. Depending on the scenario some might >be more appropriate then others. Best to check at the spot.    
    
  1. **LOCALTUNNEL**   
    Website: http://localtunnel.github.io/www/     
    NPM: https://www.npmjs.com/package/localtunnel     
    GitHub: https://github.com/localtunnel/localtunnel     

        **NOTE**: will gets auto installed when you do **[ npm run __make_application\_\_ ]** on the start of it.
       
         npm run  __make_application__  

        For manual information refer to NPM link.

  2. **NGROK**   
    Website: https://www.ngrok.com/     
    Download & Run: https://dashboard.ngrok.com/get-started/setup     

        **NOTE**: Check the 2nd [download and run] link for info how to manually run this. To have access to api from our docs page we will be using.

        Running it through autorunner.... requires you to download the zip file, put it inside ./Dev_Tools/[here] folder and then you can start autorunner.
       
         bash ./Dev_Tools/ngrok_autorunner.sh  

        This will provide a file inside ./Dev_Tools/<[ ngrok_live.txt ]> that we can later manupulate and provide to our JS in static page allowing it to try out multiple places to connect to API.

#   
#   

## Additional dev notes

### Naming:
1. Prefixing <+++>______.\_\_
   1. **_!\_** << When found as folder/file prefix means that thing is still not ready for a full run. Why may be answered somewhere but in essence those exist in prebuilds to give people idea of some directions to take...not forcing the strict follow cuz I too wanna soo something impressive.   
  

1. Sufixing ______.\_\_.<+++>  
   1. **_O**  << Finding suffixed files and folders with _O means they are OLD versions but for some reason still exist in there...  
   
           [ NOTE: These files might be in use somehwere inthe system, deleting them in not recomendable.]

