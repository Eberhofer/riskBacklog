var Schema = {
  mandates: {
    id: {type: 'increments', nullable: false, primary: true},
    mandate: {type: 'string', maxlength: 40, nullable: false, unique: true},
    created_at: {type: 'dateTime', nullable: false, defaultToNow: true},
    created_by: {type: 'string', maxlength: 40, nullable: false, defaultTo: 'user'},
    updated_at: {type: 'dateTime', nullable: true, defaultToNow: true},
    updated_by: {type: 'string', maxlength: 40, nullable: true, defaultTo: 'user'}
  },
  projects: {
    id: {type: 'increments', nullable: false, primary: true},
    project: {type: 'string', maxlength: 40, nullable: false},
    story: {type: 'text', maxlength: 4096, fieldtype: 'medium', nullable: false},
    mandate_id: {type: 'integer', nullable: false, unsigned: true, references: 'mandates.id'},
    created_at: {type: 'dateTime', nullable: false, defaultToNow: true},
    created_by: {type: 'string', maxlength: 40, nullable: false, defaultTo: 'user'},
    updated_at: {type: 'dateTime', nullable: true, defaultToNow: true},
    updated_by: {type: 'string', maxlength: 40, nullable: true, defaultTo: 'user'}
  },
  items: {
    id: {type: 'increments', nullable: false, primary: true},
    item: {type: 'string', maxlength: 40, nullable: false},
    story: {type: 'text', maxlength: 4096, fieldtype: 'medium', nullable: false},
    project_id: {type: 'integer', nullable: false, unsigned: true, references: 'projects.id'},
    created_at: {type: 'dateTime', nullable: false, defaultToNow: true},
    created_by: {type: 'string', maxlength: 40, nullable: false, defaultTo: 'user'},
    updated_at: {type: 'dateTime', nullable: true, defaultToNow: true},
    updated_by: {type: 'string', maxlength: 40, nullable: true, defaultTo: 'user'}
  },
  tasks: {
    id: {type: 'increments', nullable: false, primary: true},
    task: {type: 'string', maxlength: 40, nullable: false},
    objective: {type: 'text', maxlength: 4096, fieldtype: 'medium', nullable: false},
    item_id: {type: 'integer', nullable: false, unsigned: true, references: 'items.id'},
    created_at: {type: 'dateTime', nullable: false, defaultToNow: true},
    created_by: {type: 'string', maxlength: 40, nullable: false, defaultTo: 'user'},
    updated_at: {type: 'dateTime', nullable: true, defaultToNow: true},
    updated_by: {type: 'string', maxlength: 40, nullable: true, defaultTo: 'user'}
  }
};

module.exports = Schema;
