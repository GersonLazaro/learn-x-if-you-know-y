import java.io.InputStreamReader;
import java.io.BufferedReader;
fun main(args : Array<String>){
    val sc = BufferedReader(InputStreamReader(System.`in`))
    println("Enter Name: ");
    val name :String = sc.readLine();
    println("Hello "+name+"! Welcome to the world of Kotlin!")
}