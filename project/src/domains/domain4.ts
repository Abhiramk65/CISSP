import { Domain } from './types';

export const domain4: Domain = {
  id: 4,
  name: "Communication and Network Security",
  description: "Designing and protecting network security architecture and components",
  questions: [
    {
      "id": 1,
      "question": "An organization is deploying a new web application that will handle sensitive customer data. Which layer of the OSI model is most relevant when implementing encryption to protect this data in transit?",
      "options": [
        "Network Layer",
        "Data Link Layer",
        "Presentation Layer",
        "Transport Layer"
      ],
      "correctAnswer": 2,
      "explanation": "The Presentation Layer handles data encryption and decryption."
    },
    {
      "id": 2,
      "question": "A security analyst observes network traffic with source IP addresses in the 192.168.x.x range attempting to access a public-facing web server. What type of IP addressing is likely being used on the internal network?",
      "options": [
        "IPv6",
        "Public IP addressing",
        "Private IP addressing",
        "Class A IP addressing"
      ],
      "correctAnswer": 2,
      "explanation": "192.168.x.x is a private IP address range."
    },
    {
      "id": 3,
      "question": "To establish a secure tunnel for remote access, an organization chooses a protocol that operates at the Network Layer and provides end-to-end security. Which protocol is the most likely candidate?",
      "options": ["SSH", "TLS", "IPsec", "PPTP"],
      "correctAnswer": 2,
      "explanation": "IPsec operates at the Network Layer and provides strong security."
    },
    {
      "id": 4,
      "question": "A network engineer is configuring a load balancer and needs to understand how multiple applications can use the same underlying network connection. Which Transport Layer concept enables this?",
      "options": ["Flow control", "Virtual circuit management", "Error checking", "Multiplexing"],
      "correctAnswer": 3,
      "explanation": "Multiplexing allows multiple applications to share the same connection."
    },
    {
      "id": 5,
      "question": "During a security audit, it's noted that sensitive internal network traffic is potentially visible on other segments. What network design principle could best limit the broadcast domain and enhance security?",
      "options": [
        "Implementing a bus topology",
        "Using network hubs",
        "Implementing Virtual LANs (VLANs)",
        "Disabling routing protocols"
      ],
      "correctAnswer": 2,
      "explanation": "VLANs segment the network and limit broadcast domains."
    },
    {
      "id": 6,
      "question": "An organization wants to ensure that its backup data stored offsite cannot be accessed or modified during transit. What security measure is most appropriate for the physical transportation of backup media?",
      "options": [
        "Implementing strong encryption on the backup media",
        "Using standard courier services",
        "Allowing any employee to transport the media",
        "Using double-sealed containers and a documented chain of custody"
      ],
      "correctAnswer": 3,
      "explanation": "Chain of custody and secure containers protect media during transport."
    },
    {
      "id": 7,
      "question": "A company suspects that an attacker has gained access to a critical server. What security tool, operating passively on the network, would be best suited to capture and analyze the network traffic to and from this server?",
      "options": [
        "Intrusion Prevention System (IPS)",
        "Firewall",
        "Web Content Filter",
        "Packet Sniffer"
      ],
      "correctAnswer": 3,
      "explanation": "A packet sniffer captures and analyzes network traffic."
    },
    {
      "id": 8,
      "question": "To prevent unauthorized devices from accessing the corporate network, an organization implements a system that checks the health and compliance of endpoints before granting network access. What type of system is this?",
      "options": [
        "Intrusion Detection System (IDS)",
        "Data Loss Prevention (DLP) system",
        "Network Access Control (NAC) system",
        "Security Information and Event Management (SIEM) system"
      ],
      "correctAnswer": 2,
      "explanation": "NAC systems enforce endpoint compliance before granting network access."
    },
    {
      "id": 9,
      "question": "A web application is experiencing frequent attacks targeting known vulnerabilities. What network security component, specifically designed to protect web applications, should be implemented?",
      "options": [
        "Next-Generation Firewall",
        "Intrusion Prevention System (IPS)",
        "Web Application Firewall (WAF)",
        "Web Content Filter"
      ],
      "correctAnswer": 2,
      "explanation": "A WAF protects web applications from attacks."
    },
    {
      "id": 10,
      "question": "An organization needs to control employee access to specific categories of websites based on company policy. Which security component is best suited for this purpose?",
      "options": [
        "Firewall",
        "Intrusion Prevention System (IPS)",
        "Data Loss Prevention (DLP) system",
        "Web Content Filter"
      ],
      "correctAnswer": 3,
      "explanation": "Web content filters block access to specific website categories."
    },
    {
      "id": 11,
      "question": "To prevent sensitive data from leaving the organization via email, removable media, or cloud storage, what type of system should be implemented?",
      "options": [
        "Intrusion Detection System (IDS)",
        "Data Loss Prevention (DLP) system",
        "Network Access Control (NAC) system",
        "Security Information and Event Management (SIEM) system"
      ],
      "correctAnswer": 1,
      "explanation": "DLP systems prevent data leakage."
    },
    {
      "id": 12,
      "question": "An organization wants to monitor and control employee access to cloud-based applications and prevent the use of unsanctioned cloud services. What security solution should they deploy?",
      "options": [
        "Data Loss Prevention (DLP) system",
        "Intrusion Prevention System (IPS)",
        "Cloud Access Security Broker (CASB)",
        "Web Application Firewall (WAF)"
      ],
      "correctAnswer": 2,
      "explanation": "CASBs provide visibility and control over cloud application usage."
    },
    {
      "id": 13,
      "question": "To protect individual workstations from unauthorized access and malicious software, what is a fundamental security component that should be implemented on each endpoint?",
      "options": [
        "Network Firewall",
        "Intrusion Prevention System (IPS)",
        "Host-based Firewall and Antimalware software",
        "Web Content Filter"
      ],
      "correctAnswer": 2,
      "explanation": "Host-based firewalls and antimalware protect individual endpoints."
    },
    {
      "id": 14,
      "question": "A company uses Voice over IP (VoIP) for its phone system. What is a significant security concern specific to VoIP communications?",
      "options": [
        "Physical damage to handsets",
        "Power outages affecting desk phones",
        "Eavesdropping on unencrypted voice traffic",
        "Compatibility issues with traditional phone lines"
      ],
      "correctAnswer": 2,
      "explanation": "Unencrypted VoIP traffic can be easily eavesdropped upon."
    },
    {
      "id": 15,
      "question": "For secure remote access to the corporate network, an organization chooses to implement Virtual Private Network (VPN) using a protocol that operates at the Transport Layer and provides session-based encryption. Which protocol is a likely choice?",
      "options": ["IPsec in Tunnel mode", "PPTP", "SSL/TLS", "RADIUS"],
      "correctAnswer": 2,
      "explanation": "SSL/TLS can be used for VPNs and operates at the Transport Layer."
    },
    {
      "id": 16,
      "question": "To centralize the authentication of remote users accessing the network via VPN, which Authentication, Authorization, and Accounting (AAA) protocol is commonly used?",
      "options": ["TACACS+", "Diameter", "Kerberos", "RADIUS"],
      "correctAnswer": 3,
      "explanation": "RADIUS is commonly used for centralizing authentication."
    },
    {
      "id": 17,
      "question": "A large organization with geographically distributed sites needs a scalable AAA protocol that can support roaming users and various authentication mechanisms. Which protocol is a more modern and extensible alternative to RADIUS?",
      "options": ["TACACS+", "Diameter", "LDAP", "CHAP"],
      "correctAnswer": 1,
      "explanation": "Diameter is a modern AAA protocol designed for scalability."
    },
    {
      "id": 18,
      "question": "A network administrator needs to securely manage network devices like routers and switches remotely using an encrypted command-line interface. Which protocol should they use?",
      "options": ["Telnet", "FTP", "SNMP", "SSH"],
      "correctAnswer": 3,
      "explanation": "SSH provides a secure, encrypted channel for remote management."
    },
    {
      "id": 19,
      "question": "An organization is concerned about unauthorized access to sensitive data communicated over its wireless network. Which security protocol should they implement for the Wi-Fi access points and client devices?",
      "options": [
        "WEP",
        "MAC address filtering alone",
        "SSID hiding alone",
        "WPA2 or WPA3"
      ],
      "correctAnswer": 3,
      "explanation": "WPA2 and WPA3 provide strong encryption for wireless networks."
    },
    {
      "id": 20,
      "question": "In a wireless network, what is the purpose of the Service Set Identifier (SSID)?",
      "options": [
        "To encrypt the wireless communication",
        "To control access based on MAC addresses",
        "To uniquely identify the wireless network",
        "To manage the radio frequency channels"
      ],
      "correctAnswer": 2,
      "explanation": "The SSID is the name of the wireless network."
    },
    {
      "id": 21,
      "question": "An organization is implementing air-gapping as a security measure for a highly sensitive network. What does this technique primarily aim to prevent?",
      "options": [
        "Eavesdropping on physical cables",
        "Unauthorized physical access to devices",
        "Network-based attacks and data exfiltration",
        "Insider threats involving physical media"
      ],
      "correctAnswer": 2,
      "explanation": "Air-gapping isolates a network from other networks to prevent network-based attacks."
    },
    {
      "id": 22,
      "question": "A network technician is troubleshooting connectivity issues and needs to determine the physical layout of devices connected to a switch. What OSI layer provides the specifications for this?",
      "options": [
        "Data Link Layer",
        "Network Layer",
        "Transport Layer",
        "Physical Layer"
      ],
      "correctAnswer": 3,
      "explanation": "The Physical Layer defines the physical connections and layout."
    },
    {
      "id": 23,
      "question": "To isolate network segments logically by department within the same physical infrastructure, what technology should be used?",
      "options": ["Subnetting", "Routing", "Virtual LANs (VLANs)", "Network Address Translation (NAT)"],
      "correctAnswer": 2,
      "explanation": "VLANs create logical network segments."
    },
    {
      "id": 24,
      "question": "What is the primary security benefit of implementing microsegmentation within a data center network?",
      "options": [
        "Increased network speed",
        "Simplified network management",
        "Enhanced perimeter security",
        "Reduced lateral movement for attackers"
      ],
      "correctAnswer": 3,
      "explanation": "Microsegmentation limits an attacker's ability to move within the network."
    },
    {
      "id": 25,
      "question": "An organization is using a Content Distribution Network (CDN) to improve the delivery of its web content globally. What is a potential security implication they should consider?",
      "options": [
        "Increased latency for users",
        "Limited control over content caching locations",
        "Potential for attacks targeting the CDN infrastructure",
        "Reduced bandwidth costs"
      ],
      "correctAnswer": 2,
      "explanation": "CDNs can be targeted by attacks, affecting content availability."
    },
    {
      "id": 26,
      "question": "What is the fundamental concept behind Software-Defined Networking (SDN)?",
      "options": [
        "Increased reliance on physical network hardware",
        "Decentralized control of network functions",
        "Abstraction of the control plane from the data plane",
        "Enhanced physical security of network devices"
      ],
      "correctAnswer": 2,
      "explanation": "SDN separates the control plane from the data plane for centralized control."
    },
    {
      "id": 27,
      "question": "An organization is deploying applications in a Virtual Private Cloud (VPC) environment. What is a key security responsibility they retain in this model?",
      "options": [
        "Physical security of the cloud data center",
        "Security of the hypervisor",
        "Network infrastructure of the cloud provider",
        "Security of the applications and data deployed in the VPC"
      ],
      "correctAnswer": 3,
      "explanation": "In a VPC, the organization is responsible for securing its applications and data."
    },
    {
      "id": 28,
      "question": "What is a critical aspect of securely operating network infrastructure like routers and switches?",
      "options": [
        "Allowing any employee to configure devices",
        "Using default passwords for ease of management",
        "Implementing managed change processes for configurations",
        "Disabling all monitoring to reduce overhead"
      ],
      "correctAnswer": 2,
      "explanation": "Change management ensures secure and controlled configurations."
    },
    {
      "id": 29,
      "question": "When selecting transmission media for a secure network, what is a primary advantage of fiber optic cable over copper cabling in terms of security?",
      "options": [
        "Lower installation cost",
        "Easier to tap without detection",
        "More resistant to eavesdropping and electromagnetic interference",
        "Higher bandwidth capacity for shorter distances"
      ],
      "correctAnswer": 2,
      "explanation": "Fiber optic cables are more secure against eavesdropping."
    },
    {
      "id": 30,
      "question": "What is the purpose of a demilitarized zone (DMZ) in a network architecture?",
      "options": [
        "To provide a secure internal network for sensitive data",
        "To directly expose all internal servers to the internet",
        "To host public-facing services while isolating them from the internal network",
        "To create a backup network for disaster recovery"
      ],
      "correctAnswer": 2,
      "explanation": "A DMZ isolates public-facing servers from the internal network."
    },
    {
      "id": 31,
      "question": "What is a primary difference between an Intrusion Detection System (IDS) and an Intrusion Prevention System (IPS)?",
      "options": [
        "IDS operates at Layer 3, while IPS operates at Layer 7",
        "IDS actively blocks malicious traffic, while IPS only monitors and alerts",
        "IDS passively monitors traffic and alerts, while IPS can actively block threats",
        "IPS is hardware-based, while IDS is software-based"
      ],
      "correctAnswer": 2,
      "explanation": "An IPS can block threats, while an IDS only detects them."
    },
    {
      "id": 32,
      "question": "What is a significant limitation of a knowledge-based (signature-based) Intrusion Detection System (IDS)?",
      "options": [
        "High rate of false positive alerts",
        "Inability to detect known attacks",
        "Difficulty in detecting new or zero-day attacks",
        "Requirement for constant manual configuration"
      ],
      "correctAnswer": 2,
      "explanation": "Signature-based IDS cannot detect new attacks."
    },
    {
      "id": 33,
      "question": "What is a primary function of a Security Information and Event Management (SIEM) system?",
      "options": [
        "To prevent network intrusions in real-time",
        "To filter malicious web content",
        "To collect, analyze, and correlate security logs and events from various sources",
        "To enforce network access control policies"
      ],
      "correctAnswer": 2,
      "explanation": "SIEM systems aggregate and analyze security logs."
    },
    {
      "id": 34,
      "question": "What is the goal of implementing endpoint security measures?",
      "options": [
        "To secure the physical network infrastructure",
        "To manage user identities and access rights",
        "To protect individual devices (workstations, laptops, mobile devices) from threats",
        "To monitor network traffic for malicious activity"
      ],
      "correctAnswer": 2,
      "explanation": "Endpoint security protects individual devices."
    },
    {
      "id": 35,
      "question": "What is a common vulnerability associated with remote meeting software?",
      "options": [
        "Inability to share screens effectively",
        "High bandwidth consumption",
        "Potential for unauthorized users to join meetings or gain control",
        "Limited recording capabilities"
      ],
      "correctAnswer": 2,
      "explanation": "Remote meeting software can be vulnerable to unauthorized access."
    },
    {
      "id": 36,
      "question": "What is a key security consideration when allowing third-party connectivity to an organization's network?",
      "options": [
        "Ensuring all third parties use the same operating systems",
        "Trusting all third-party devices implicitly",
        "Implementing strict access controls and monitoring third-party activity",
        "Sharing all internal network documentation with third parties"
      ],
      "correctAnswer": 2,
      "explanation": "Third-party access requires strict controls and monitoring."
    },
    {
      "id": 37,
      "question": "What is a primary benefit of using a Virtual Private Network (VPN) for remote access?",
      "options": [
        "Increased internet speed for remote users",
        "Direct access to the public internet without corporate filtering",
        "Creation of an encrypted tunnel to protect data confidentiality and integrity",
        "Elimination of the need for strong endpoint security"
      ],
      "correctAnswer": 2,
      "explanation": "VPNs create encrypted tunnels for secure remote access."
    },
    {
      "id": 38,
      "question": "What is a characteristic of the Terminal Access Controller Access Control System Plus (TACACS+) protocol compared to RADIUS?",
      "options": [
        "Uses UDP for transport",
        "Encrypts only the password in the authentication process",
        "Supports granular control of authorization parameters",
        "Is an open standard widely supported by all vendors"
      ],
      "correctAnswer": 2,
      "explanation": "TACACS+ provides more granular control over authorization."
    },
    {
      "id": 39,
      "question": "What is a primary security concern related to the use of cellular/mobile networks for corporate data?",
      "options": [
        "Limited geographical coverage",
        "High data costs",
        "Potential for interception of unencrypted communications over public networks",
        "Lack of device management capabilities"
      ],
      "correctAnswer": 2,
      "explanation": "Cellular networks can expose unencrypted data to interception."
    },
    {
      "id": 40,
      "question": "What is a key security practice to mitigate risks associated with in-band network management?",
      "options": [
        "Using only physical console access",
        "Allowing management access from any network segment",
        "Securing management protocols (e.g., SSH) and limiting access sources",
        "Disabling all network management interfaces"
      ],
      "correctAnswer": 2,
      "explanation": "Secure protocols and access control are essential for in-band management."
    },
    {
      "id": 41,
      "question": "What is a primary security advantage of implementing out-of-band network management?",
      "options": [
        "Lower network latency for management traffic",
        "Reduced complexity in network design",
        "Provides a separate management plane, isolating it from production traffic and attacks",
        "Increased bandwidth for data transmission"
      ],
      "correctAnswer": 2,
      "explanation": "Out-of-band management isolates management traffic from production traffic."
    },
    {
      "id": 42,
      "question": "What is a potential risk associated with relying solely on MAC address filtering for wireless network security?",
      "options": [
        "Difficulty in managing a large number of MAC addresses",
        "Incompatibility with certain wireless devices",
        "MAC addresses can be easily spoofed by attackers",
        "Limited range of the wireless signal"
      ],
      "correctAnswer": 2,
      "explanation": "MAC addresses can be easily spoofed, making filtering ineffective."
    },
    {
      "id": 43,
      "question": "What is a key security consideration when implementing wireless bridging between two wired network segments?",
      "options": [
        "Increased network broadcast traffic",
        "Potential for electromagnetic interference",
        "Securing the wireless link to prevent unauthorized network access",
        "Reduced network bandwidth compared to wired connections"
      ],
      "correctAnswer": 2,
      "explanation": "Wireless links must be secured to prevent unauthorized access."
    },
    {
      "id": 44,
      "question": "What is a primary security advantage of using virtual routing and forwarding (VRF)?",
      "options": [
        "Increased routing protocol convergence speed",
        "Reduced CPU utilization on routing devices",
        "Allows for the creation of isolated routing domains on the same physical router",
        "Simplified configuration of complex routing policies"
      ],
      "correctAnswer": 2,
      "explanation": "VRF allows for isolated routing domains on a single router."
    },
    {
      "id": 45,
      "question": "What is a significant security challenge associated with the increasing use of edge networks?",
      "options": [
        "Reduced attack surface compared to centralized networks",
        "Simplified management of security controls across distributed locations",
        "Increased number of distributed nodes that need to be secured and monitored",
        "Enhanced physical security due to smaller, more localized deployments"
      ],
      "correctAnswer": 2,
      "explanation": "Edge networks increase the number of devices that need to be secured."
    },
    {
      "id": 46,
      "question": "What is a primary security concern related to the use of public cloud for corporate infrastructure and data?",
      "options": [
        "Lack of physical access to the underlying hardware",
        "Inability to customize the operating system",
        "Shared responsibility model requiring the organization to secure their own workloads and data",
        "Higher costs compared to on-premises deployments"
      ],
      "correctAnswer": 2,
      "explanation": "Organizations are responsible for securing their data in the public cloud."
    },
    {
      "id": 47,
      "question": "What is a fundamental principle to follow when implementing secure communication channels?",
      "options": [
        "Relying solely on perimeter security controls",
        "Assuming all internal network traffic is trustworthy",
        "Implementing encryption for sensitive data in transit",
        "Disabling all logging to prevent performance degradation"
      ],
      "correctAnswer": 2,
      "explanation": "Encryption is essential for securing data in transit."
    },
    {
      "id": 48,
      "question": "What is a common attack vector targeting remote access services?",
      "options": [
        "Physical theft of the VPN concentrator",
        "Exploitation of vulnerabilities in physical network cables",
        "Brute-force attacks on authentication credentials",
        "Electromagnetic interference affecting the remote connection"
      ],
      "correctAnswer": 2,
      "explanation": "Remote access services are often targeted by brute-force attacks."
    },
    {
      "id": 49,
      "question": "What is a primary security consideration when dealing with data communications across different network segments or with third parties?",
      "options": [
        "Ensuring all communication uses the same network protocol",
        "Trusting the security of all interconnected networks",
        "Implementing appropriate data protection measures (e.g., encryption) based on data sensitivity",
        "Allowing unrestricted access for all data communication flows"
      ],
      "correctAnswer": 2,
      "explanation": "Data protection measures should be based on data sensitivity."
    },
    {
      "id": 50,
      "question": "What is a key aspect of addressing personnel safety and security concerns related to communication and network security?",
      "options": [
        "Providing employees with personal firewalls for their home networks",
        "Allowing employees to use any communication method they prefer",
        "Educating employees about phishing, social engineering, and safe remote work practices",
        "Monitoring all employee communication content"
      ],
      "correctAnswer": 2,
      "explanation": "Employee education is crucial for preventing social engineering and phishing."
    }
  ],
  flashCards: [
    {
      "id": 1,
      "front": "OSI Model",
      "back": "The **Open Systems Interconnection (OSI) Reference Model** defines seven distinct layers that describe how data is communicated between systems and applications on a computer network. This layered approach simplifies understanding, design, and development of networking solutions. Data moves from Layer 7 (Application) down to Layer 1 (Physical), undergoing data encapsulation at each layer, and then moves back up at the destination through decapsulation. Each layer communicates exclusively with the layer immediately above and below it.",
      "category": "Networking Models"
    },
    {
      "id": 2,
      "front": "TCP/IP Model",
      "back": "The **Transmission Control Protocol/Internet Protocol (TCP/IP) model** is the most widely used network protocol suite today and is derived from the DARPA model. It roughly maps to the OSI model and forms the fundamental basis for the Internet and most organizational networks.",
      "category": "Networking Models"
    },
    {
      "id": 3,
      "front": "Network Segmentation",
      "back": "This is the practice of dividing a network into smaller, isolated subnetworks to manage traffic, improve performance, and enhance security. It enables administrators to block or detect suspicious traffic between segments, aligning with the zero trust security design principle.",
      "category": "Network Design"
    },
    {
      "id": 4,
      "front": "DMZ (Demilitarized Zone)",
      "back": "A **DMZ** is a network segment strategically located between a protected internal network and an untrusted external network (like the Internet). It acts as a buffer zone, typically hosting public-facing servers such as web, mail, and DNS servers, and is commonly secured by two firewalls.",
      "category": "Network Design"
    },
    {
      "id": 5,
      "front": "Firewall",
      "back": "A **firewall** is a network device used to filter traffic based on a defined set of rules, also known as filters or access control lists. It's typically deployed at the perimeter to prevent malicious traffic from entering a private network and can also segment internal departments.",
      "category": "Network Security Controls"
    },
    {
      "id": 6,
      "front": "Converged Protocols",
      "back": "These are modern network protocols that allow different types of communication to be transported over a single network infrastructure, often leveraging existing Ethernet or IP networks. Examples include Fibre Channel over Ethernet (FCoE), Multiprotocol Label Switching (MPLS), Voice over Internet Protocol (VoIP), and Internet Small Computer System Interface (iSCSI).",
      "category": "Networking Protocols"
    },
    {
      "id": 7,
      "front": "Software-Defined Networks (SDN)",
      "back": "**SDN** is an approach that allows network elements and architectures to be virtualized and managed rapidly through software and Application Programming Interfaces (APIs). This enables intelligent network functions like routing and load balancing to run on commodity hardware, similar to server virtualization.",
      "category": "Network Technologies"
    },
    {
      "id": 8,
      "front": "Wireless Networks (Wi-Fi)",
      "back": "**Wireless networks** transmit data through the air, making them extremely vulnerable to interception. Key security aspects include managing Service Set Identifiers (SSIDs), implementing authentication, and using strong encryption. Wired Equivalent Privacy (WEP) is considered insecure and should never be used.",
      "category": "Network Technologies"
    },
    {
      "id": 9,
      "front": "Endpoint Security",
      "back": "This concept emphasizes that each individual computing device must maintain local security, regardless of the network's overall security. Endpoints include desktops, laptops, servers, smartphones, tablets, IoT devices, and point-of-sale terminals. It views any weakness on a client or server as a risk to the entire organization.",
      "category": "Security Concepts"
    },
    {
      "id": 10,
      "front": "VPN (Virtual Private Network)",
      "back": "**VPNs** are based on encrypted tunneling, establishing a secure channel to exchange information over a potentially insecure intermediary network, such as the Internet. They provide authentication and data protection, creating a point-to-point secure solution.",
      "category": "Network Security Controls"
    },
    {
      "id": 11,
      "front": "TLS (Transport Layer Security)",
      "back": "**TLS** is an OSI Layer 4 (Transport) protocol that provides session-based encryption and authentication for secure communication between clients and servers, particularly over the Internet. It protects data in motion and relies on digital certificates to verify endpoint identities.",
      "category": "Network Security Protocols"
    },
    {
      "id": 12,
      "front": "NAT (Network Address Translation)",
      "back": "**NAT** is a security function often supported by firewalls and routers that protects the addressing scheme of a private network. It allows an organization to use private IP addresses internally while enabling multiple internal clients to access the Internet through a few public IP addresses.",
      "category": "Network Security Controls"
    },
    {
      "id": 13,
      "front": "DoS (Denial of Service) Attack",
      "back": "A **DoS attack** is a resource consumption attack designed to prevent legitimate users from accessing a system or service. It renders the target unable to respond to legitimate traffic by overwhelming it with bogus requests. A DDoS (Distributed Denial of Service) attack uses multiple compromised systems to launch the attack.",
      "category": "Network Attacks"
    },
    {
      "id": 14,
      "front": "Eavesdropping",
      "back": "**Eavesdropping** is a communication system attack where a malicious user or entity intercepts network transmissions to obtain content or learn information about communications. It's a passive attack, making it difficult to detect, and often relies on technologies like wireless sniffing.",
      "category": "Network Attacks"
    },
    {
      "id": 15,
      "front": "Spoofing",
      "back": "**Spoofing** is an attack where an attacker disguises their identity or the origin of data to gain unauthorized access, manipulate data, or deceive users. Examples include spoofing user identity, IP addresses, or domain names.",
      "category": "Network Attacks"
    },
    {
      "id": 16,
      "front": "Traffic Flows (North-South vs. East-West)",
      "back": "**North-South traffic** refers to communications between systems within a network and systems outside the network (e.g., Internet traffic).\n**East-West traffic** refers to communications between systems within the same network. Threat actors often exploit the relatively limited visibility and security controls in east-west traffic to move laterally after initial network penetration.",
      "category": "Networking Concepts"
    },
    {
      "id": 17,
      "front": "Network Access Control (NAC)",
      "back": "**NAC systems** are used to enforce a variety of network-related policies. **Pre-admission NAC** determines whether a system is permitted to join a network, while **Post-admission NAC** includes controls like firewalls and Intrusion Detection/Prevention Systems (IDS/IPS) that operate on devices already admitted to the network.",
      "category": "Network Security Controls"
    },
    {
      "id": 18,
      "front": "Transmission Media",
      "back": "These are the physical components used to carry information throughout a network, categorized as wired (e.g., copper, fiber optic cables) or wireless (e.g., radio waves). Security considerations include protecting wired media from physical tapping and wireless media from eavesdropping.",
      "category": "Network Technologies"
    },
    {
      "id": 19,
      "front": "OSI Layers (Specific)",
      "back": "•\n**Physical Layer (Layer 1)**: Deals with the physical transmission of raw bits over the network medium.\n•\n**Data Link Layer (Layer 2)**: Manages framing, error detection, and physical addressing (MAC addresses) for communication within a local network segment.\n•\n**Network Layer (Layer 3)**: Handles logical addressing (IP addresses) and routing of packets between different networks.\n•\n**Transport Layer (Layer 4)**: Provides reliable or unreliable end-to-end data transfer between applications, managing flow control and segmentation (TCP, UDP).\n•\n**Session Layer (Layer 5)**: Establishes, manages, and terminates communication sessions between applications.\n•\n**Presentation Layer (Layer 6)**: Deals with data formatting, encryption, and compression to ensure data is presented in a readable format for the application layer.\n•\n**Application Layer (Layer 7)**: Provides network services directly to end-user applications (e.g., HTTP, FTP, SMTP).",
      "category": "Networking Models"
    },
    {
      "id": 20,
      "front": "Collision Domain",
      "back": "A **collision domain** is a group of networked systems where simultaneous data transmission by any two or more devices can result in a collision on the shared medium. Network switches effectively reduce collision domains by creating a separate one for each port.",
      "category": "Networking Concepts"
    },
    {
      "id": 21,
      "front": "Broadcast Domain",
      "back": "A **broadcast domain** is a group of networked systems where all members receive a broadcast signal transmitted by any other member. Routers typically divide broadcast domains, preventing broadcasts from propagating further.",
      "category": "Networking Concepts"
    },
    {
      "id": 22,
      "front": "Cryptosystem Goals",
      "back": "Cryptosystems are designed to achieve key security objectives:\n•\n**Confidentiality**: Ensures data remains private and is not disclosed to unauthorized subjects.\n•\n**Integrity**: Guarantees that data has not been altered intentionally or unintentionally by unauthorized subjects.\n•\n**Authentication**: Verifies the claimed identity of a subject or the origin of an object.\n•\n**Nonrepudiation**: Provides undeniable proof that the sender of a message actually authored it, preventing them from denying it later.",
      "category": "Cryptography"
    }
  ]
}; 