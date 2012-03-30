import sys
import json

src = raw_input()
print(json.dumps(eval(src)))