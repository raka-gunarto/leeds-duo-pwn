# Leeds Duo Pwn (User-Agent Spoofer)

Uni of Leeds implemented an overkill solution to authentication which is to require 2FA on every sign in and there is no persistent session / remember device option. This has me fumbling to find my phone multiple times a day which is a massive workflow interruption.  

If you're on MacOS this isn't an issue, since you can enroll your machine as an authenticator with TouchID. On Windows this isn't an option, and I didn't want to buy a 60 USD security key just yet.  

Introducing UA spoofing! We trick duo thinking that we have a Mac, and since it just uses WebAuthn under the hood anyway we can configure it to use the Windows Hello PIN instead. Easy GG (discovery made by [@Aaron29th](https://github.com/Aaron29th))