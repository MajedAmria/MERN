public class Test {
    public static void main(String[] args){
        BinarySearchTree tree= new BinarySearchTree();
        tree.insertNode(10);
        tree.insertNode(5);
        tree.insertNode(15);
        tree.insertNode(3);
        tree.insertNode(13);
        tree.printNode();
       tree.search(15);

    }
}
