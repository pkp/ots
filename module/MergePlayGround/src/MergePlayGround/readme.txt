
INSTALL
--
* folder structure
/usr/local/merge-playground/corpus
/usr/local/merge-playground/jats/cermine
/usr/local/merge-playground/jats/metypeset
/usr/local/merge-playground/diffs

Note: you can change folders location by modifying following constants in merge.php
* MERGESPACE, CORPUS_DIR, JAT_DIR, DIFF_DIR

CORPUS_DIR  : place docx and pdf documents here (use identical filenames)
JAT_DIR     : cermine and metypeet jats xml will be saved here
DIFF_DIR    : diff xml files location

USAGE
--
from xmlps root directory, run 

php module/MergePlayGround/src/MergePlayGround/merge.php
