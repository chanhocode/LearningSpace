package ex11;

import java.io.IOException;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetAddress;

import static ex11.UDPserver.PORT_NO;

public class UDPclient {
    public static final String SERVER_IP = "127.0.0.1";
    public static void main(String[] args) {
        try (DatagramSocket clientSkt = new DatagramSocket()) {
            InetAddress serverAddr = InetAddress.getByName(SERVER_IP);

            for (var i = 0; i < 100; i++) {
                byte[] sendData = ("click " + i + 1).getBytes();
                DatagramPacket sendPacket = new DatagramPacket(
                        sendData,
                        sendData.length,
                        serverAddr,
                        PORT_NO
                );

                clientSkt.send(sendPacket);

                byte[] receiveData = new byte[1024];
                DatagramPacket receivePacket = new DatagramPacket(
                        receiveData, receiveData.length
                );

                for (var j = 0; j < 9; j++) {
                    clientSkt.receive(receivePacket);

                    String response = new String(
                            receivePacket.getData(),
                            0, receivePacket.getLength()
                    );
                    System.out.println("수신 : " + response);
                }


            }
        } catch (IOException e) {}
    }
}
