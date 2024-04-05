import React, { useState, useEffect } from 'react';
import { Table, Spinner, Button } from 'react-bootstrap';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';

interface Request {
    id: number;
    name: string;
    phone: string;
    email: string;
    status: 'SUCCESSFUL' | 'FAILED';
    description: string;
}

const RequestTable = () => {
    const [requests, setRequests] = useState<Request[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [hoveredRow, setHoveredRow] = useState<number | null>(null);

    useEffect(() => {
        // Replace with your actual API endpoint
        const fetchData = async () => {
            try {
                const response = await fetch('/api/getRequests');
                const data = await response.json();
                setRequests(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch('/api/getRequests');
            const data = await response.json();
            setRequests(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    

    const handleStatusUpdate = async (request: object, newStatus: string) => {
        try {
            const response = await fetch('/api/updateRequestStatus', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ request, newStatus }),
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            toast.success(' تم ارسال الطلب');
            await fetchData();
    
            // Optionally, refresh the data in your table to reflect the updated status
            // fetchData();
        } catch (error) {
            console.error('Error updating status:', error);
        }
    };

    const handleApprove = (request: object) => {
        // Implement the approve functionality
        handleStatusUpdate(request, 'معتمد');
    };

    const handleReject = (request: object) => {
        // Implement the reject functionality
        handleStatusUpdate(request, 'مرفوض');
    };

    const filteredRequests = searchTerm
        ? requests.filter(
            request =>
                request.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                request.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
                request.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                request.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : requests;

    if (loading) {
        return <Spinner animation="border" />;
    }

    const styles = {
        tableContainer: {
            background: '#fff',
            borderRadius: '10px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            overflowX: 'auto',
            margin: '24px',
            fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
        },
        searchContainer: {
            display: 'flex',
            justifyContent: 'flex-end',
            padding: '20px',
            backgroundColor: '#fff',
            borderRadius: '10px 10px 0 0',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
            marginBottom: '-10px',
        },
        searchInput: {
            padding: '10px',
            fontSize: '16px',
            borderRadius: '5px',
            border: '1px solid #ddd',
            marginRight: '10px',
            width: '300px',
            outline: 'none',
            transition: 'border-color 0.3s',
        },
        table: {
            width: '100%',
            borderCollapse: 'collapse',
            borderSpacing: '0',
        },
        th: {
            backgroundColor: '#007bff',
            color: 'white',
            fontWeight: '600',
            padding: '15px 20px',
            borderBottom: '2px solid #ddd',
            textAlign: 'left',
        },
        td: {
            padding: '12px 20px',
            borderBottom: '1px solid #ddd',
            textAlign: 'left',
            fontSize: '14px',
            color: '#333',
            transition: 'background-color 0.3s',
        },
        actionButton: {
            cursor: 'pointer',
            background: 'none',
            border: 'none',
            padding: '5px 10px',
            transition: 'color 0.3s',
        },
    };

    return (
        <>
        <ToastContainer position={toast.POSITION.TOP_CENTER} autoClose={2000} hideProgressBar={false} />
        <div style={styles.tableContainer}>
            <div style={styles.searchContainer}>
                <input
                    type="text"
                    placeholder="Search..."
                    style={styles.searchInput}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <Table responsive style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.th}>رقم الملف</th>
                        <th style={styles.th}>الاسم</th>
                        <th style={styles.th}>رقم الهاتف</th>
                        <th style={styles.th}>البريد الالكتروني</th>
                      
                        <th style={styles.th}>الوصف</th>
                        <th style={styles.th}>الاجراء</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredRequests.map((request, index) => (
                        <tr
                            key={request.id}
                            onMouseEnter={() => setHoveredRow(index)}
                            onMouseLeave={() => setHoveredRow(null)}
                            style={hoveredRow === index ? { backgroundColor: '#f5f5f5' } : {}}
                        >
                            <td style={styles.td}>{request.id}</td>
                            <td style={styles.td}>{request.name}</td>
                            <td style={styles.td}>{request.phone}</td>
                            <td style={styles.td}>{request.email}</td>
                            {/* <td style={styles.td}>
                                {request.status === 'SUCCESSFUL' ? 
                                    <span style={{ color: 'green', fontWeight: '700' }}>{request.status}</span> : 
                                    <span style={{ color: 'red', fontWeight: '700' }}>{request.status}</span>
                                }
                            </td> */}
                            <td style={styles.td}>{request.description}</td>
                            <td style={styles.td}>
                                <Button variant="outline-primary" size="sm" style={styles.actionButton} onClick={() => handleApprove(request)}>
                                    <AiOutlineCheck /> اعتماد
                                </Button>
                                <Button variant="outline-danger" size="sm" style={styles.actionButton} onClick={() => handleReject(request.id)}>
                                    <AiOutlineClose /> رفض
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
        </>
    );
};

export default RequestTable;
