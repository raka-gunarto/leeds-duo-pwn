# Leeds Duo Pwn (User-Agent Spoofer)

Uni of Leeds implemented an overkill solution to authentication which is to require 2FA on every sign in and there is no persistent session / remember device option. This has me fumbling to find my phone multiple times a day which is a massive workflow interruption.  

If you're on MacOS this isn't an issue, since you can enroll your machine as an authenticator with TouchID. On Windows this isn't an option, and I didn't want to buy a 60 USD security key just yet.  

Introducing UA spoofing! We trick duo thinking that we have a Mac, and since it just uses WebAuthn under the hood anyway we can configure it to use the Windows Hello PIN instead. Easy GG (discovery made by [@Aaron29th](https://github.com/Aaron29th))

## Setup Instructions

1. Clone this repository or download it zipped, extract to chosen directory
2. Go to extensions, turn on developer mode and choose "Load unpacked extension". Select the folder you placed the files in
3. Go to "Sign-in options" in Windows, if you don't have a fingerprint scanner or a Windows Hello camera capable of facial recognition, be sure to enable Windows Hello PIN
4. Next time when logging in to duo, click the menu on the top right instead, and choose "Add a New Device".
5. Select "Touch ID"
6. You should now be greeted with a Windows Hello prompt to authenticate yourself
7. Enjoy
