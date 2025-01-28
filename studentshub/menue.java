import java.awt.*;

public class MenuExample {
    public static void main(String[] args) {
        Frame frame = new Frame("Menu Example");
        MenuBar menuBar = new MenuBar();
        
        // Create a File menu
        Menu fileMenu = new Menu("File");
        MenuItem newMenuItem = new MenuItem("New");
        MenuItem openMenuItem = new MenuItem("Open");
        MenuItem saveMenuItem = new MenuItem("Save");
        MenuItem exitMenuItem = new MenuItem("Exit");
        fileMenu.add(newMenuItem);
        fileMenu.add(openMenuItem);
        fileMenu.add(saveMenuItem);
        fileMenu.addSeparator(); // Add a separator between items
        fileMenu.add(exitMenuItem);
        
        // Add the File menu to the MenuBar
        menuBar.add(fileMenu);
        
        // Set the MenuBar to the frame
        frame.setMenuBar(menuBar);
        
        // Set the size and make the frame visible
        frame.setSize(300, 200);
        frame.setVisible(true);
    }
}
