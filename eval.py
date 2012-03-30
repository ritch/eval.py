import sys
import json 

while True:
  src = raw_input()
  if src.startswith('import'):
    exec src
  else:
    print(json.dumps(eval(src)))