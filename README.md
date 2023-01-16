# TASK
There is a very simple NodeJS app. This app will basically use a random number generator to crash. Every 5 seconds it checks to see if it is unlucky and then will be in a crashed state for every request after. It is set to crash on average once every 2 minutes, of course since it is random it could be one second or 5 minutes. The goal is to have a docker image running in a k8s instance that when the app gets into a crashed state it will create a new instance so it can auto-recover and a user will be redirected to the good instance (of course it may crash on their request but such is life). 

# SCREENSHOT
<img width="553" alt="Screenshot 2023-01-15 at 9 08 33 PM" src="https://user-images.githubusercontent.com/46081608/212590396-5a1a5bd0-22a5-4454-9b17-ede7918875a7.png">
