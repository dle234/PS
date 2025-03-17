import sys
read = sys.stdin.readline

s=read().rstrip()
boom=read().rstrip()

stack=[]
# 시간복잡도 O(s)
for i in range(len(s)): 
    stack.append(s[i])
    if("".join(stack[-len(boom):])==boom):
        for _ in range(len(boom)):
            stack.pop()
        

answer = "".join(stack)
print(answer if len(answer)>0 else "FRULA")

