package ex11;

import java.io.IOException;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.SocketException;

public class UDPserver {
    public static final int PORT_NO = 2345;
    public static void main (String[] args) {
        try(DatagramSocket serverSkt = new DatagramSocket(PORT_NO)) {
            while (true) {
                byte[] receiveData = new byte[1024];

                DatagramPacket receivePacket = new DatagramPacket(
                        receiveData, receiveData.length
                );
                serverSkt.receive(receivePacket);

                String received = new String(
                        receivePacket.getData(),
                        0, receivePacket.getLength()
                );
                System.out.println("수신 : " + received);

                for (var i=0; i <9; i++) {
                    var answer = received + " - 효과 " + (i+1);
                    byte[] toSend = answer.getBytes();

                    DatagramPacket sendPacket = new DatagramPacket(
                            toSend,
                            toSend.length,
                            receivePacket.getAddress(),
                            receivePacket.getPort()
                    );
                    serverSkt.send(sendPacket);
                }

            }
        } catch (SocketException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {}
    }
}
