N, M = map(int, input().split())
tree_list = list(map(int, input().split()))
# [10 15 17 20]
# [4 26 40 42 46]
tree_list.sort()
# tree_list[N-1] 는 가장 큰 값.
# mid 잡아서 비교해보기.  만약 arr[mid]<arr[i] 이면  arr[i]-arr[mid] 하고 그렇게 다 더했을 떄 M 보다 크면
# 필요한 숫자가 리스트의 오른쪽에 있다는 것이므로 오른쪽에서 재귀 돌리기.(mid-1 mid+1해줘서)
# 그렇게 해서 구해진 숫자와 그거+1인덱스 하면 그 두 숫자 사이에 원하는 숫자가 있음. 이거를 하나하나씩 다해주기.....
# 만약 어레이[]== 원하는숫자  -> 바로 출력해주기.


def binary(start, end, M, arr):
    if start >= end:
        return start
    count = 0
    mid = (start+end)//2
    for i in range(N-mid):  # i 는 0부터
        count += arr[N-i-1]-arr[mid]  # count 는
    if count > M:
        return binary(mid+1, end, M, arr)
    elif count < M:
        return binary(start, mid, M, arr)
    else:
        print(arr[mid])
        exit()


def search(m, arr, start, end):  # start = 26, end=40, m=20
    # for i in range(start, end+1):  # i 는 26~40
    if start >= end:
        return start
    mid = (start+end)//2
    hap = 0
    for j in range(N):  # j 는 0~4
        if arr[j] > mid:
            hap += arr[j]-mid
    if m > hap:
        return search(m, arr, start, mid)
    else:
        return search(m, arr, mid+1, end)

    return count

#  4 26 40 42 46


bin = binary(0, N-1, M, tree_list)  # 2    arr[2]==40
dap = 0
hap = 0
hap2 = 0
if bin == 0:
    dap = search(M, tree_list, 0, tree_list[bin])
    for j in range(N):  # j 는 0~4
        if tree_list[j] > dap:
            hap += tree_list[j]-dap
    for j in range(N):  # j 는 0~4
        if tree_list[j] > dap-1:
            hap2 += tree_list[j]-dap-1
    if hap > hap2:
        print(dap-1)
    else:
        print(dap)

else:
    dap = search(M, tree_list, tree_list[bin-1], tree_list[bin])
    for j in range(N):  # j 는 0~4
        if tree_list[j] > dap:
            hap += tree_list[j]-dap
    for j in range(N):  # j 는 0~4
        if tree_list[j] > dap-1:
            hap2 += tree_list[j]-dap-1
    if hap > hap2:
        print(dap-1)
    else:
        print(dap)