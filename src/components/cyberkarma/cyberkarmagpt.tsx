import React, { useState } from 'react';
import {
  Box,
  Typography,
  IconButton,
  Avatar,
  TextField,
  Button,
} from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const SUPPORTED_IMAGE_TYPES = ['image/png', 'image/jpeg', 'image/gif', 'image/webp'];

interface Message {
  id: number;
  type: 'ai' | 'user';
  content?: string;
  file?: File;
  fileUrl?: string;
  timestamp: string;
}

const CyberKarmaGPT: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'ai',
      content: 'Hello! How can I assist you today?',
      timestamp: '10:00 AM',
    },
  ]);

  const [inputValue, setInputValue] = useState('');
  const [editingMessageId, setEditingMessageId] = useState<number | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    if (editingMessageId !== null) {
      setMessages((prevMessages) =>
        prevMessages.map((msg) =>
          msg.id === editingMessageId ? { ...msg, content: inputValue } : msg
        )
      );
      setEditingMessageId(null);
    } else {
      const newMessage: Message = {
        id: messages.length + 1,
        type: 'user',
        content: inputValue,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages([...messages, newMessage]);

      setTimeout(() => {
        const aiResponse: Message = {
          id: messages.length + 2,
          type: 'ai',
          content: 'This is a simulated AI response.',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages((prevMessages) => [...prevMessages, aiResponse]);
      }, 1000);
    }

    setInputValue('');
  };

  const handleEditMessage = (id: number) => {
    const messageToEdit = messages.find((msg) => msg.id === id);
    if (messageToEdit && messageToEdit.content) {
      setInputValue(messageToEdit.content);
      setEditingMessageId(id);
    }
  };

  const handleCancelEdit = () => {
    setInputValue('');
    setEditingMessageId(null);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const isImage = SUPPORTED_IMAGE_TYPES.includes(file.type);

      const reader = new FileReader();
      reader.onloadend = () => {
        const newMessage: Message = {
          id: messages.length + 1,
          type: 'user',
          file: file,
          fileUrl: isImage ? (reader.result as string) : undefined,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages([...messages, newMessage]);

        setTimeout(() => {
          const aiResponse: Message = {
            id: messages.length + 2,
            type: 'ai',
            content: 'Received your file!',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          };
          setMessages((prevMessages) => [...prevMessages, aiResponse]);
        }, 1000);
      };

      if (isImage) {
        reader.readAsDataURL(file);
      } else {
        reader.onloadend();
      }

      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const renderMessageContent = (message: Message) => {
    if (message.content) {
      return <Typography variant="body1">{message.content}</Typography>;
    } else if (message.file && message.fileUrl) {
      if (SUPPORTED_IMAGE_TYPES.includes(message.file.type)) {
        return (
          <Box>
            <img
              src={message.fileUrl}
              alt={message.file.name}
              style={{ maxWidth: '100%', borderRadius: '8px', marginTop: '8px' }}
            />
            <Typography variant="body2" sx={{ color: '#ADFF2F', marginTop: '4px' }}>
              Uploaded Image: {message.file.name}
            </Typography>
          </Box>
        );
      } else {
        return (
          <Typography variant="body1" sx={{ color: '#ADFF2F' }}>
            Uploaded File: {message.file.name}
          </Typography>
        );
      }
    }
    return null;
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: '58vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#040D30',
        padding: '20px',
        borderRadius: 5,
      }}
    >
      <Box sx={{ flex: 1, overflowY: 'auto', marginBottom: '16px' }}>
        {messages.map((message) => (
          <Box
            key={message.id}
            sx={{
              display: 'flex',
              flexDirection: message.type === 'user' ? 'row-reverse' : 'row',
              alignItems: 'flex-start',
              marginBottom: '16px',
            }}
          >
            <Avatar
              src={
                message.type === 'ai'
                  ? '/vite.svg'
                  : '/user.png'
              }
              alt={message.type === 'ai' ? 'AI Avatar' : 'User Avatar'}
              sx={{
                width: 40,
                height: 40,
                margin: message.type === 'ai' ? '0 8px 0 0' : '0 0 0 8px',
              }}
            />

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-start',
              }}
            >
              {message.type === 'user' && (
                <IconButton
                  aria-label="Edit Message"
                  size="small"
                  sx={{ marginRight: '4px', color: '#FFFFFF' }}
                  onClick={() => handleEditMessage(message.id)}
                >
                  <EditIcon fontSize="small" />
                </IconButton>
              )}

              <Box
                sx={{
                  maxWidth: '100%',
                  backgroundColor: '#3A4B9C',
                  color: '#FFFFFF',
                  padding: '12px',
                  borderRadius: '8px',
                  position: 'relative',
                }}
              >
                {renderMessageContent(message)}

                <Typography
                  variant="caption"
                  sx={{
                    position: 'absolute',
                    bottom: '-20px',
                    right: '0px',
                    color: '#888',
                  }}
                >
                  {message.timestamp}
                </Typography>
              </Box>
            </Box>

            {message.type === 'ai' && (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: '8px',
                  gap: '4px',
                }}
              >
                <IconButton aria-label="Like" size="small">
                  <ThumbUpIcon fontSize="small" sx={{ color: '#FFFFFF' }} />
                </IconButton>
                <IconButton aria-label="Dislike" size="small">
                  <ThumbDownIcon fontSize="small" sx={{ color: '#FFFFFF' }} />
                </IconButton>
                <CopyToClipboard text={message.content || ''}>
                  <IconButton aria-label="Copy to Clipboard" size="small">
                    <ContentCopyIcon fontSize="small" sx={{ color: '#FFFFFF' }} />
                  </IconButton>
                </CopyToClipboard>
              </Box>
            )}
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#171E40',
          padding: '8px',
          borderRadius: '8px',
        }}
      >
        <input
          type="file"
          accept="image/*,video/*,.pdf,.doc,.docx"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileUpload}
        />
        <IconButton
          aria-label="Upload File"
          component="span"
          sx={{ color: '#FFFFFF', marginRight: '8px' }}
          onClick={() => fileInputRef.current && fileInputRef.current.click()}
        >
          <AddIcon />
        </IconButton>

        <TextField
          variant="outlined"
          placeholder={editingMessageId !== null ? 'Edit your message...' : 'Type your message...'}
          fullWidth
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              handleSendMessage();
            }
          }}
          sx={{
            backgroundColor: '#384A9C',
            '& .MuiInputBase-input': {
              color: '#FFFFFF',
            },
          }}
          InputProps={{
            style: {
              height: '40px',
            },
          }}
        />
        {editingMessageId !== null && (
          <Button
            variant="text"
            color="inherit"
            onClick={handleCancelEdit}
            sx={{ marginLeft: '8px', height: '40px', color: '#FFFFFF' }}
          >
            Cancel
          </Button>
        )}
        <Button
          variant="contained"
          color="primary"
          onClick={handleSendMessage}
          sx={{ marginLeft: '8px', height: '40px' }}
        >
          {editingMessageId !== null ? 'Update' : 'Send'}
        </Button>
      </Box>
    </Box>
  );
};

export default CyberKarmaGPT;
