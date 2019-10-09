# nconv

Various conversions, 
inplace replacement directly in the text.

Good as basic text transaltion support.


## ft2cm - US feet and inches notation to metric centimeters

Sample:
	
convert to cm, keep original feet size in output

	node src/index.js "4'" "%(ft)s %(cm).0f cm"

convert larger test file:

	cat test/data.txt | while read l; do node src/index.js "$l" "%(ft)s %(cm).0f cm"; done
	cat test/data.txt | while read l; do node src/index.js "$l" "%(cm).0fcm"; done

Bike sizes

145cm - 163cm 	redline expert
145cm - 160cm	haro expert
142cm - 163cm	LLB generic table


