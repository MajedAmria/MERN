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
    
    //in order
    public void printNodeInorder(Node root){
        if(root!=null){
            printNodeInorder(root.left);
            System.out.print(root.key+" ");
            printNodeInorder(root.right);
        }
    }   

    public void printInorder(){
        printNodeInorder(root);
    }

    //pre order
    public void printNodePreorder(Node root){
        if(root!=null){
            System.out.print(root.key+" ");
            printNodePreorder(root.left);
            printNodePreorder(root.right);
        }
    } 

    public void printPreorder(){
        printNodePreorder(root);
    }

    //post order
    public void printNodePostorder(Node root){
        if(root!=null){
            printNodePostorder(root.left);
            printNodePostorder(root.right);
            System.out.print(root.key+" ");
        }
    } 

    public void printPostorder(){
        printNodePostorder(root);
    }

  
}

