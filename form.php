<?php
    if($_SERVER["REQUEST_METHOD"] == "POST"){
        $quote = $_POST['Quote'];
        $name = $_POST['Name'];
        $contact = $_POST['Contact'];
        $email = $_POST['E-mail'];
        $link = $_POST['Link to file'];
        $type = $_POST['Servicetype'];
        $service = $_POST['Service'];
        $area = $_POST['Area'];
        $note = $_POST['Note'];

        $email_subject = "New Quote Submission";
                $email_body = "Quote: $quote.\n";
                                "Name: $name.\n";
                                    "Contact: $contact.\n";
                                        "E-mail: $email.\n";
                                            "Link to file: $link.\n";
                                                "Servicetype: $type.\n";
                                                    "Service: $service.\n";
                                                        "Area: $area.\n";
                                                            "Note: $note.\n";
        $to ='ashwin.thomas.5458@gmail.com';
        $fromName="Quote Form";
        $from="";
        $headers = "From: $fromName"." <".$from.">";        

        if(!empty($_FILES["attachment"]["name"])){
                
            $fileName = basename($_FILES["attachment"]["name"]);
            $fileType = pathinfo($fileName,PATHINFO_EXTENSION);
            
            $allowTypes = array('pdf', 'doc', 'docx', 'jpg', 'png', 'jpeg');
            if(in_array($fileType, $allowTypes)){
                $semi_rand = md5(time()); 
                $mime_boundary = "==Multipart_Boundary_x{$semi_rand}x"; 
                    
                    
                $headers .= "\nMIME-Version: 1.0\n" . "Content-Type: multipart/mixed;\n" . " boundary=\"{$mime_boundary}\""; 
                    
                // Multipart boundary 
                $message = "--{$mime_boundary}\n" . "Content-Type: text/html; charset=\"UTF-8\"\n" .
                "Content-Transfer-Encoding: 7bit\n\n" .  $email_body . "\n\n"; 
                    
                // Preparing attachment
                if(is_file($fileName)){
                    $message .= "--{$mime_boundary}\n";
                    $fp =    $fileName;
                    $data = filesize($fileName);
                    
                    $data = chunk_split(base64_encode($data));
                    $message .= "Content-Type: application/octet-stream; name=\"".basename($fileName)."\"\n" . 
                    "Content-Description: ".basename($fileName)."\n" .
                    "Content-Disposition: attachment;\n" . " filename=\"".basename($fileName)."\"; size=".filesize($fileName).";\n" . 
                    "Content-Transfer-Encoding: base64\n\n" . $data . "\n\n";
                }
                    
                $message .= "--{$mime_boundary}--";
                $returnpath = "-f" . $email;
                 
                $mail = mail($to, $email_Subject, $message, $headers, $returnpath);
                
            }else{
                echo '<p> Sorry, only PDF, DOC, JPG, JPEG, & PNG files are allowed.</p>';
            }
        }else{
            // Set content-type header for sending HTML email
            $headers .= "\r\n". "MIME-Version: 1.0";
            $headers .= "\r\n". "Content-type:text/html;charset=UTF-8";
            
            // Send email
            $mail = mail($to, $email_subject, $email_body, $headers); 
        }

        header("Location: https://inchesnfeet.com");
        if($mail){
            echo '<p>Your message has been sent successfully!</p>';
        } else{
            echo '<p>Unable to send email. Please try again!</p>';
        }
    }          
?>