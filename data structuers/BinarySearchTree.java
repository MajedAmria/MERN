class BinarySearchTree{

    
    Node root;

    public BinarySearchTree(){
        root=null;
    }

    public BinarySearchTree(int value){
        root=new Node(value);
    }

    Node insert(Node root,int value){
        if(root==null){
            root=new Node(value);
            return root;
        }

        if(value<root.key){
            root.left=insert(root.left,value);
        }
        else if(value>root.key){
            root.right=insert(root.right,value);
        }
        return root;
    }

    public void insertNode(int value){
        root=insert(root,value);
    }

    public void print(Node root){
        if(root!=null){
            print(root.left);
            System.out.println(root.key);
            print(root.right);
        }
    }   

    public void printNode(){
        print(root);
    }



}

