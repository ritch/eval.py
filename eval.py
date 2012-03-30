import sys
import json

src = '';

while src != 'exit()':
  src = sys.stdin.readline().rstrip()

  if src.startswith('exec: '):
    src = src.split('exec: ')[1]
    exec src
  else:
    print(json.dumps(eval(src)))