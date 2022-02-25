# Bind mouse button (Linux)
We need two software to do this:
 - xbindkeys: it can run a command line when you click a mouse button and cancels default behaviour.
 - xautomation: it can simulate keyboard key press using from command line. try`xte 'mouseclick 1'`
```bash
sudo apt install xbindkeys xautomation
```
Get mouse button codes
```bash
xev | grep button
```
We get: 
 -  forward button is 9
 - backward button is 8
 - middle button is 2
Create xbindkeys configuration file
```bash
xbindkeys -d > ~/.xbindkeysrc
```
Now we can edit the config file
xautomation manual: https://linux.die.net/man/1/xte
Example configuration: 
```
"xte 'keydown Control_L' 'key c' 'keyup Control_L'"
  b:9
```
Start xbindkeys
```
xbindkeys
```
Restart
```
killall xbindkeys && xbindkeys
```
My configuration:
```
"xte 'keydown Control_L' 'key c' 'keyup Control_L'"
  b:9

"xte 'keydown Control_L' 'key v' 'keyup Control_L'"
  b:8

"xte 'key Return'"
  b:2
```
# Other tool:
input remapper
https://github.com/sezanzeb/input-remapper
