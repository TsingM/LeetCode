var addTwoNumbers = function(l1, l2) {
    // 创建初始结点
    var sum = l1.val + l2.val, l3 = new ListNode(sum % 10), node = l3;
    l1 = l1.next; l2 = l2.next;
    sum = sum > 9 ? 1 : 0;//初始进位数
    while(l1 || l2 || sum) {
        sum += (l1 ? l1.val : 0) + (l2 ? l2.val : 0);//进位数
        node.next = new ListNode(sum % 10);//创建新节点
        // 将各自新节点设为当前项
        node = node.next;
        sum = sum > 9 ? 1 : 0;
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }
	return l3;
};