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

    public Node searchNode(Node root, int value){
        if(root==null||root.key==value){

            return root;
        }
        
        if(root.key>value){
            return searchNode(root.left, value);
        }
        else{
            return searchNode(root.right, value);
        }
    
    }

    public void search(int value){
        if(searchNode(root,value)==null){
            System.out.println("false");
        }
        else{
            if(searchNode(root.left,value)!=null){
            System.out.println("True it found : "+searchNode(root,value).key+" it left");
            }
            else if(searchNode(root.right,value)!=null){
                System.out.println("True it found : "+searchNode(root,value).key+" it right");
            }
            else{
                System.out.println("True it found : "+searchNode(root,value).key+" it root");
            }
        }
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

