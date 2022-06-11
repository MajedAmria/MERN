public class Test {
    public static void main(String[] args){
        BinarySearchTree tree= new BinarySearchTree();
        tree.insertNode(1);
        tree.insertNode( 2);
        tree.insertNode(3);
        tree.insertNode(4);
        tree.insertNode(5);
        tree.insertNode(6);
        tree.insertNode(7);
        
        tree.printInorder();
        System.out.println("  <== in order");
        tree.printPreorder();
        System.out.println("  <== pre order");
        tree.printPostorder();
        System.out.println("  <== post order");
        
        System.out.println(tree.findMinValue());
        System.out.println(tree.findMaxValue());
    }
}
