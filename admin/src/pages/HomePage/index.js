/*
 *
 * HomePage
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';
import { ModalLayout, ModalBody, ModalHeader, ModalFooter, IconButton, IconButtonGroup, Grid, Alert, GridItem, Tabs, Tab, TabGroup, TabPanels, TabPanel, GridLayout, EmptyStateLayout, Box, Button, BaseHeaderLayout } from '@strapi/design-system';
import { Plus, Pencil, Write, Information, Trash, Play } from '@strapi/icons';

const Tetris = require('react-tetris');

import './game.css';



const HomePage = () => {

  const [showInstModal, setInstModal] = useState(true);


  const handleInstModal = () => setInstModal(false);

  return (
    <div>
      <Tetris>
        {({
          HeldPiece,
          Gameboard,
          PieceQueue,
          points,
          linesCleared,
          state,
          reset
        }) => (
          <div>
            <Box background="neutral100">
              <BaseHeaderLayout primaryAction={<Button startIcon={<Plus />}>View Leaderboard</Button>} title="Welcome to Tetris" subtitle={<p>Points: {points} | Lines Cleared: {linesCleared}</p>} as="h2" />
            </Box>
            <Box paddingLeft={10} paddingRight={10}>
            {showInstModal && 
            <Alert closeLabel="handleInstModal" title="Instructions!" onClose={handleInstModal}>
            Use the left and right arrows on your keyboard to move the piece in those directions. Use the up arrow to rotate the piece and the down arrow to make it go down fast! Share your high score somewhere you can get validation lol, enjoy :p
          </Alert>
          }
          </Box>
            
            <Box paddingLeft={8}>
              <GridLayout>
                <Box paddingLeft={8}>
                  <Grid gap={5}>
                    <GridItem background="neutral100" padding={5} col={4} s={6} xs={12}>
                      <Gameboard />
                    </GridItem>
                    <GridItem background="neutral100" padding={5} col={3} s={6} xs={12}>
                      <PieceQueue />
                    </GridItem>
                  </Grid>
                  {/* <Box padding={7}>
                    <IconButtonGroup>
                      <IconButton onClick={() => handleInstModal()} label="Edit" icon={<Pencil />} />
                      <IconButton onClick={() => console.log('Create')} label="Create" icon={<Plus />} />
                      <IconButton onClick={() => console.log('Delete')} label="Delete" icon={<Trash />} />
                      <IconButton onClick={() => console.log('Publish')} label="Publish" icon={<Play />} />
                    </IconButtonGroup>
                  </Box> */}
                  {state === 'LOST' && (
                    () => {
                      const [isVisible, setIsVisible] = useState(false);
                      const [date, setDate] = useState();
                      setIsVisible(prev => !prev);
                      return <>
                      // fix
                        {isVisible && <ModalLayout onClose={() => setIsVisible(prev => !prev)} labelledBy="title">
                          <ModalHeader>
                            <Typography fontWeight="bold" textColor="neutral800" as="h2" id="title">
                              Title
                            </Typography>
                          </ModalHeader>
                          <ModalBody>
                            <div>
                              <h2>Game Over</h2>
                              <button onClick={reset}>New Game</button>
                            </div>
                          </ModalBody>
                          <ModalFooter startActions={<Button onClick={() => setIsVisible(prev => !prev)} variant="tertiary">
                            Cancel
                          </Button>} endActions={<>
                            <Button variant="secondary">Add new stuff</Button>
                            <Button onClick={() => setIsVisible(prev => !prev)}>Finish</Button>
                          </>} />
                        </ModalLayout>}
                      </>;
                    }

                  )}
                </Box>
              </GridLayout>
            </Box>

          </div>
        )}
      </Tetris>
    </div>
  );
};

export default memo(HomePage);
